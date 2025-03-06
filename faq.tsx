import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FAQScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      
      <Text style={styles.question}>1. What is this app for?</Text>
      <Text style={styles.answer}>
        This app helps prevent noise-induced hearing loss by monitoring noise levels using machine learning and providing warnings of potentially damaging noise along with recommendations.
      </Text>
      
      <Text style={styles.question}>2. How does the app monitor noise levels?</Text>
      <Text style={styles.answer}>
        The app uses your device's microphone to measure noise levels and sends this data to our backend server for analysis.
      </Text>
      
      <Text style={styles.question}>3. Is my data safe?</Text>
      <Text style={styles.answer}>
        Yes, we only collect noise level data, and no other personal information is stored or shared. We implement security measures to protect your data.
      </Text>
      
      <Text style={styles.question}>4. What should I do if the app warns about harmful noise levels?</Text>
      <Text style={styles.answer}>
        If the app detects harmful noise levels, we recommend moving at least 50 meters away from the noise source to protect your hearing.
      </Text>
      
      <Text style={styles.question}>5. Can I use the app without an internet connection?</Text>
      <Text style={styles.answer}>
        The app requires an internet connection to send noise level data to our server for analysis and to provide accurate warnings and recommendations.
      </Text>
      
      <Text style={styles.question}>6. How do I contact support?</Text>
      <Text style={styles.answer}>
        If you have any questions or concerns, please contact our support team at p.gihozo@alustudent.com.
      </Text>
      
      <Text style={styles.footer}>
        Thank you for using our app. We are dedicated to helping you protect your hearing.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0a7ea4',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#0a7ea4',
  },
  answer: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    fontStyle: 'italic',
    color: '#0a7ea4',
  },
});

export default FAQScreen;