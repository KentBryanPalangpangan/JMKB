import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const FilterScreen = () => {
  const [filterMode, setFilterMode] = useState('dark');
  const [filterPastries, setfilterPastries] = useState([]);

  // Sample function to apply filter logic
  const applyFilter = () => {
    // This is a placeholder for your actual logic to filter books based on the selected mode
    const filterPastries = []; // Placeholder, replace with your actual logic
    setfilterPastries(filterPastries);
  };

  return (
    <View style={[styles.container, {backgroundColor: '#F0E68C'}]}>
      <Text style={styles.heading}>Filter Pastries</Text>

      <TouchableOpacity
        style={[styles.filterButton, filterMode === 'dark' && styles.darkMode]}
        onPress={() => {
          setFilterMode('dark');
          setfilterColor('#96001c');
        }}>
        <Text style={styles.filterButtonText}>Dark Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.filterButton, filterMode === 'light' && styles.lightMode]}
        onPress={() => {
          setFilterMode('light');
          setfilterColor('#96001c');
        }}>
        <Text style={styles.filterButtonText}>Light Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
        <Text style={styles.applyButtonText}>Apply Filter</Text>
      </TouchableOpacity>

      {/* Display filtered books */}
      <View style={styles.filterPastriesContainer}>
        <Text style={styles.filterPastriesHeading}>Filtered Pastries:</Text>
        {filterPastries.map((book, index) => (
          <Text key={index} style={styles.filteredBook}>
            {book.title}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  filterButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  darkMode: {
    backgroundColor: '#333',
    color: '#fff',
  },
  lightMode: {
    backgroundColor: '#fff',
  },
  applyButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterPastriesContainer: {
    marginTop: 30,
  },
  filterPastriesHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filteredBook: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default FilterScreen;
