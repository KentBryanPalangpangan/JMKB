import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Cakes from '../../../assets/Cake.png';
import Others from '../../../assets/Others.png';
import Bread from '../../../assets/Bread.png';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  // Define a fixed size for the images
  const imageSize = 100;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Our Bakery</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigateToScreen('HistoryScreen')} style={styles.imageWrapper}>
          <Image
            source={Cakes}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>Cakes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('BiologyScreen')} style={styles.imageWrapper}>
          <Image
            source={Bread}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>Bread</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('OtherScreen')} style={styles.imageWrapper}>
          <Image
            source={Others}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>Others</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C', // Modified background color
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  imageWrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
