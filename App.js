import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/**
 * Deploy Ready Demo App
 *
 * This is a simple demo app configured for deployment.
 * Your actual app will replace this entire file.
 *
 * ✅ 100% Complete - This demo app is ready to deploy as-is
 *
 * DEPLOYMENT CHECKLIST:
 * - TODO #1: Create app icons and splash screens (see assets/)
 * - TODO #2: Configure app.json metadata (name, bundle IDs, etc.)
 * - TODO #3: Build and submit to app stores (follow docs/DEPLOYMENT_GUIDE.md)
 */
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>🚀 Deploy Ready</Text>
        <Text style={styles.subtitle}>EAS Build Configuration Template</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>✅ What's Ready</Text>
          <Text style={styles.cardText}>• Complete EAS Build configuration (eas.json)</Text>
          <Text style={styles.cardText}>• App configuration template (app.json)</Text>
          <Text style={styles.cardText}>• Asset templates (icons, splash screens)</Text>
          <Text style={styles.cardText}>• Deployment documentation</Text>
          <Text style={styles.cardText}>• App Store submission checklists</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📝 Your TODOs</Text>
          <Text style={styles.todoText}>TODO #1: Create App Assets</Text>
          <Text style={styles.cardText}>Replace template icons and splash screens with your designs</Text>

          <Text style={styles.todoText}>TODO #2: Configure Metadata</Text>
          <Text style={styles.cardText}>Update app.json with your app name, bundle IDs, and permissions</Text>

          <Text style={styles.todoText}>TODO #3: Build and Submit</Text>
          <Text style={styles.cardText}>Run EAS Build and submit to iOS App Store / Google Play Store</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📚 Documentation</Text>
          <Text style={styles.cardText}>• docs/DEPLOYMENT_GUIDE.md - Complete build instructions</Text>
          <Text style={styles.cardText}>• docs/APP_STORE_CHECKLIST.md - Submission requirements</Text>
          <Text style={styles.cardText}>• docs/PRIVACY_POLICY.md - Privacy policy template</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🔨 Quick Start</Text>
          <Text style={styles.codeText}>npm install --legacy-peer-deps</Text>
          <Text style={styles.codeText}>npm install -g eas-cli</Text>
          <Text style={styles.codeText}>eas login</Text>
          <Text style={styles.codeText}>eas build:configure</Text>
        </View>

        <Text style={styles.footer}>React Native {require('react-native/package.json').version}</Text>
        <Text style={styles.footer}>Expo SDK 53 | React 19</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
    lineHeight: 20,
  },
  todoText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3498db',
    marginTop: 12,
    marginBottom: 4,
  },
  codeText: {
    fontSize: 13,
    color: '#e74c3c',
    fontFamily: 'monospace',
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderRadius: 4,
    marginBottom: 6,
  },
  footer: {
    fontSize: 12,
    color: '#95a5a6',
    textAlign: 'center',
    marginTop: 10,
  },
});
