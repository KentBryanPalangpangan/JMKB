import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Cake from  '../../../assets/Cake.png';
import Bread3 from  '../../../assets/Bread3.png';
import Bread from  '../../../assets/Bread.png';
import Cake2 from '../../../assets/Cake2.png';

const FavoritesScreen = () => {
  
  const favoriteItems = [
    { id: '1', name: 'Favorite Cake', image: Cake },
    { id: '2', name: 'Favorite Bread', image: Bread },
    { id: '3', name: 'Favorite Bread', image: Bread3 },
    { id: '4', name: 'Favorite Cake', image: Cake2 },
  ];

  
  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favoriteItems}
        renderItem={renderFavoriteItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0E68C', // Changed background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
