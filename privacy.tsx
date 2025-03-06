import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyPolicyScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.content}>
        Welcome to our Noise Induced Hearing Loss Prevention App. We value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your data when you use our application.
      </Text>
      
      <Text style={styles.subtitle}>1. Information We Collect</Text>
      <Text style={styles.content}>
        The only data we collect is the noise level detected by your device. No other personal information is collected or stored by our application.
      </Text>
      
      <Text style={styles.subtitle}>2. How We Use Your Information</Text>
      <Text style={styles.content}>
        The noise level data is sent to our backend server to analyze and provide you with warnings about potentially damaging noise levels. This data helps us improve the accuracy of our machine learning models to better protect your hearing.
      </Text>
      
      <Text style={styles.subtitle}>3. Data Security</Text>
      <Text style={styles.content}>
        We implement appropriate security measures to protect your noise level data from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
      </Text>
      
      <Text style={styles.subtitle}>4. Data Sharing</Text>
      <Text style={styles.content}>
        We do not share your noise level data with any third parties. The data is solely used for the purpose of analyzing noise levels and providing you with accurate warnings and recommendations.
      </Text>
      
      <Text style={styles.subtitle}>5. Changes to This Privacy Policy</Text>
      <Text style={styles.content}>
        We may update this privacy policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically to stay informed about how we are protecting your information.
      </Text>
      
      <Text style={styles.subtitle}>6. Contact Us</Text>
      <Text style={styles.content}>
        If you have any questions or concerns about this privacy policy or our data practices, please contact us at p.gihozo@alustudent.com.
      </Text>
      
      <Text style={styles.thankyou}>
        Thank you for using our app and helping to protect your hearing.
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#0a7ea4',
  },
  content: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
  thankyou: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    fontStyle: 'italic',
    color: '#0a7ea4',
  },
});

export default PrivacyPolicyScreen;