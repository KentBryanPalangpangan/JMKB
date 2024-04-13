import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './Screens/HomeScreen';
import CategoryScreen from './Screens/CategoryScreen';
import FavoritesScreen from './Screens/FavoritesScreen';
import ServicesScreen from './Screens/ServicesScreen'; 
import FiltersScreen from './Screens/FiltersScreen'; 
import AboutUsScreen from './Screens/AboutUsScreen';
import ContactScreen from './Screens/ContactScreen';
import LogoutScreen from './Screens/LogoutScreen'; 


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Category') {
            iconName = 'grid';
          } else if (route.name === 'Fav') {
            iconName = 'star';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Category" component={CategoryScreen}options={{ headerShown: false }}  />
      <Tab.Screen name="Fav" component={FavoritesScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Services" component={ServicesScreen} />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
      <Drawer.Screen name="About Us" component={AboutUsScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <MyDrawer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#F0E68C',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
},
});
