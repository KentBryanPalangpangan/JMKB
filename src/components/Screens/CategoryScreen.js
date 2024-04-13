import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cake from '../../../assets/Cake.png';
import Cake2 from '../../../assets/Cake2.png';
import Cake3 from '../../../assets/Cake3.png';


import Bread from '../../../assets/Bread.png';
import Bread2 from '../../../assets/Bread2.png';
import Bread3 from '../../../assets/Bread3.png';
import Others from '../../../assets/Others.png';

const Stack = createStackNavigator();

const HistoryScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(Bread, "History Image 1")} style={styles.imageContainer}>
          <Image source={Bread} style={styles.image} />
          <Text style={styles.imageTitle}>World History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(Bread2, "History Image 2")} style={styles.imageContainer}>
          <Image source={Bread2} style={styles.image} />
          <Text style={styles.imageTitle}>American History</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Norem</Text><Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text style={styles.text}>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const BiologyScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(Cake, "Biology Image 1")} style={styles.imageContainer}>
          <Image source={Cake} style={styles.image} />
          <Text style={styles.imageTitle}>Plant Biology</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(Cake2, "Biology Image 2")} style={styles.imageContainer}>
          <Image source={Cake2} style={styles.image} />
          <Text style={styles.imageTitle}>Zoology</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Norem</Text><Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text style={styles.text}>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const OtherScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleDetails = (image, title) => {
    setShowDetails(!showDetails);
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        <TouchableOpacity onPress={() => toggleDetails(Bread, "Other Image 1")} style={styles.imageContainer}>
          <Image source={Bread} style={styles.image} />
          <Text style={styles.imageTitle}>Milk Bread</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(Bread2, "Other Image 2")} style={styles.imageContainer}>
          <Image source={Bread2} style={styles.image} />
          <Text style={styles.imageTitle}>Crusty White Bread</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDetails(Bread3, "Other Image 3")} style={styles.imageContainer}>
          <Image source={Bread3} style={styles.image} />
          <Text style={styles.imageTitle}>French Bread</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal visible={showDetails} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.modalImage} />
          )}
          <Text style={styles.modalText}>Bread</Text><Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor. 
          </Text>
          <Text style={styles.text}>
            Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
          </Text>
          <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
      </Modal>
    </View>
  );
};

const CategoryScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoryListScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Biology" component={BiologyScreen} />
      <Stack.Screen name="Other" component={OtherScreen} />
    </Stack.Navigator>
  );
};

const CategoryListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigation.navigate('Cakes')} style={styles.categoryContainer}>
        <Image source={Cake} style={styles.categoryIcon} />
        <Text style={styles.category}>Cakes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Breads')} style={styles.categoryContainer}>
        <Image source={Cake2} style={styles.categoryIcon} />
        <Text style={styles.category}>Breads</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Other')} style={styles.categoryContainer}>
        <Image source={Cake3} style={styles.categoryIcon} />
        <Text style={styles.category}>Other</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0E68C',
  },
  categoryContainer: {
    width: '30%',
    margin: 10,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageTitle: {
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C', // Background color for modal container
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  }
});


export default CategoryScreen;