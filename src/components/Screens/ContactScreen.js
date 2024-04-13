import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import MapImage from '../../../assets/Map.png';

const ContactScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Contact Us</Text>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image source={MapImage} style={styles.locationImage} />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information:</Text>
            <Text style={styles.contactInfo}>Email: example@example.com</Text>
            <Text style={styles.contactInfo}>Phone: +1234567890</Text>
            <Text style={styles.contactInfo}>Address: 123 Street, City, Country</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#F0E68C', // Background color for the whole screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    alignItems: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F0E68C', // Background color for the image container
  },
  locationImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
  },
});

export default ContactScreen;
