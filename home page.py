Imports


import pandas as pd
import numpy as np
import datetime

# Define the number of samples for training and testing datasets
n_train = 10000
n_test = 2000

# Define additional fields
location_types = ['Indoor', 'Outdoor']
genders = ['Male', 'Female', 'Other']
hearing_sensitivity = ['Normal', 'Mild', 'Moderate', 'Severe']
health_issues = ['Healthy', 'Diabetes', 'Hypertension', 'Heart Disease', 'Other']
environments = ['Residential', 'Workplace', 'Recreational', 'Traffic', 'Industrial']

# Generate random data
np.random.seed(42)  # For reproducibility

def generate_data(num_samples):
    timestamps = [datetime.datetime.now() - datetime.timedelta(minutes=15*i) for i in range(num_samples)]
    user_ids = np.random.randint(1000, 9999, num_samples)
    noise_levels = np.random.uniform(0, 100, num_samples)  # Mean = 65dB, Std = 10dB
    durations = np.random.normal(60, 20, num_samples)  # Mean = 60 minutes, Std = 20 minutes
    ages = np.random.randint(18, 65, num_samples)
    data = {
        'Timestamp': [ts.strftime('%Y-%m-%d %H:%M:%S') for ts in timestamps],
        'User_ID': user_ids,
        'Location_Type': np.random.choice(location_types, num_samples),
        'Environment': np.random.choice(environments, num_samples),
        'Noise_Level_dB': noise_levels,
        'Duration_Minutes': durations,
        'Age': ages,
        'Gender': np.random.choice(genders, num_samples),
        'Hearing_Protection_Used': np.random.choice(['Yes', 'No'], num_samples),
        'Hearing_Sensitivity': np.random.choice(hearing_sensitivity, num_samples),
        'Health_Issues': np.random.choice(health_issues, num_samples)
    }
    # Simulate hearing damage risk
    data['Hearing_Damage_Risk'] = (data['Noise_Level_dB'] > 90) | (data['Duration_Minutes'] > 480)  # 8 hours threshold
    data['Hearing_Damage_Risk'] = data['Hearing_Damage_Risk'].astype(int)  # Convert to binary
    return pd.DataFrame(data)

# Generate training and testing datasets
train_data = generate_data(n_train)
test_data = generate_data(n_test)

# Save to CSV files
train_data.to_csv("train.csv", index=False)
test_data.to_csv("test.csv", index=False)

print("Data generation complete. Files saved as 'simulated_train_data_extended.csv' and 'simulated_test_data_extended.csv'.")

     
Data generation complete. Files saved as 'simulated_train_data_extended.csv' and 'simulated_test_data_extended.csv'.

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout

# Load the dataset
train = pd.read_csv('train.csv')
test = pd.read_csv('test.csv')

# Drop unnecessary columns
train = train.drop(['Timestamp', 'User_ID'], axis=1)
test = test.drop(['Timestamp', 'User_ID'], axis=1)

data = pd.concat([train, test])


# Handle missing values (if any)
data = data.dropna()

# Define categorical and numerical columns
categorical_columns = ['Location_Type', 'Environment', 'Gender', 'Hearing_Protection_Used', 'Hearing_Sensitivity', 'Health_Issues']
numerical_columns = ['Noise_Level_dB', 'Duration_Minutes', 'Age']

# One-hot encode categorical variables and scale numerical features
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numerical_columns),
        ('cat', OneHotEncoder(), categorical_columns)
    ])

# Split data into features and target
X = data.drop('Hearing_Damage_Risk', axis=1)
y = data['Hearing_Damage_Risk']

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Apply preprocessing
X_train = preprocessor.fit_transform(X_train)
X_test = preprocessor.transform(X_test)

# Convert sparse matrices to dense arrays
# X_train = X_train.toarray()
# X_test = X_test.toarray()

# Define the model
model = Sequential([
    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    Dropout(0.5),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(X_train, y_train, epochs=50, batch_size=32, validation_data=(X_test, y_test))

# Evaluate the model (optional)
loss, accuracy = model.evaluate(X_test, y_test)
print(f'Accuracy: {accuracy}')