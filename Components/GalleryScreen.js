import React, { useState } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, StyleSheet } from 'react-native';

// Початковий масив зображень для галереї
const initialGalleryImages = [
  { id: '1', source: require('../assets/image/1.jpg') },
  { id: '2', source: require('../assets/image/2.jpg') },
  { id: '3', source: require('../assets/image/3.jpg') },
];

const GalleryScreen = () => {
  // Стан для збереження зображень галереї
  const [galleryImages, setGalleryImages] = useState(initialGalleryImages);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Галерея</Text>

      <FlatList
        data={galleryImages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.source} style={styles.image} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 16,
  },
  imageContainer: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default GalleryScreen;
