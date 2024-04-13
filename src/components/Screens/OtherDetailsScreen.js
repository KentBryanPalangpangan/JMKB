import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BiologyDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Pastries Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C', // Added background color
  },
});

export default BiologyDetailScreen;
