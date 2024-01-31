import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  // Отримання об'єкту навігації для переходу між екранами
  const navigation = useNavigation();

  // Функція для переходу на екран ContactsScreen
  const handleNavigateToContacts = () => {
    navigation.navigate('ContactsScreen');
  };

  // Функція для переходу на екран GalleryScreen
  const handleNavigateToGallery = () => {
    navigation.navigate('GalleryScreen');
  };

  return (
    <View style={styles.container}>
      <Text>Домашня сторінка</Text>

      {/* Контейнер для кнопок переходу на інші екрани */}
      <View style={styles.buttonContainer}>
        <Button title="Контакти" onPress={handleNavigateToContacts} />

        <View style={styles.buttonSpacing} />

        <Button title="Галерея" onPress={handleNavigateToGallery} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonSpacing: {
    marginRight: 10,
  },
});

export default HomeScreen;
