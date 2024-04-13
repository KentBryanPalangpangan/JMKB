import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const ServicesScreen = () => {

  const handleBrowseBooks = () => {
    // Implement browsing logic here
    Alert.alert('Browse Books', 'You are browsing the book collection!');
  };

  const handleSearchBooks = () => {
    // Implement searching logic here
    Alert.alert('Search Books', 'You are searching for books!');
  };

  const handleViewFavorites = () => {
    // Implement view favorites logic here
    Alert.alert('View Favorites', 'You are viewing your favorite books!');
  };

  const handleRecommendations = () => {
    // Implement recommendations logic here
    Alert.alert('Recommendations', 'You are viewing book recommendations!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Our Bakery</Text>

      <TouchableOpacity style={styles.button} onPress={handleBrowseBooks}>
        <Text style={styles.buttonText}>Browse Pastries</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSearchBooks}>
        <Text style={styles.buttonText}>Search Pastries</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleViewFavorites}>
        <Text style={styles.buttonText}>View Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRecommendations}>
        <Text style={styles.buttonText}>Recommendations</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C', // Changed background color
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#96001c', // Change the background color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
    width: 250, // Set a fixed width for all buttons
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ServicesScreen;
