import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Kent from '../../../assets/Kent.jpg';
import Mike from '../../../assets/Mike.jpg';

const AboutUsScreen = () => {
  const imageSize = 100; // Define the size of the image

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Us</Text>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Founder:</Text>
          <View style={styles.profileContainer}>
            <Image
              source={Kent}
              style={[styles.profileImage, { width: imageSize, height: imageSize }]}
              resizeMode="contain"
            />
            <Text>Kent Bryan T. Palangpangan</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Co-founder:</Text>
          <View style={styles.profileContainer}>
            <Image
              source={Mike}
              style={[styles.profileImage, { width: imageSize, height: imageSize }]}
              resizeMode="contain"
            />
            <Text>John Mike D. Soldahon</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Our System</Text>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id tortor ut elit varius commodo sit amet ac magna. Nullam euismod euismod lorem nec hendrerit. Suspendisse potenti. Sed interdum libero eget ante ultrices condimentum. Duis et elit eu massa commodo ultrices. Donec vel odio eu risus aliquam auctor.
        </Text>
        <Text>
          Phasellus eget libero id turpis fermentum scelerisque. Aliquam erat volutpat. Ut non ex et quam aliquam convallis.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    alignItems: 'center',
  }
});

export default AboutUsScreen;
