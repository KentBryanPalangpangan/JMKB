import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        Copyright © 2024 JMKB All rights reserved.
        Founder & Co-founder : Kent Bryan T. Palangpangan & John Mike D. Soldahon
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    padding: 5,
    paddingBottom: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default Footer