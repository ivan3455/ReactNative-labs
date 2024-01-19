import React, { Component } from 'react';
import { View, ScrollView, Image, Button, Alert, StyleSheet, TextInput, Text } from 'react-native';

class App extends Component {
  state = {
    inputText: '',
  };

  handleText = (text) => {
    this.setState({ inputText: text });
  };

  render() {
    const photos = [
      'https://upload.wikimedia.org/wikipedia/ru/e/e8/%D0%A2%D0%B0%D1%87%D0%BA%D0%B8.jpg',
      'https://static.wikia.nocookie.net/carspixar/images/7/70/CotR_McQueen.png/revision/latest?cb=20220816160403&path-prefix=ru',
      'https://web-skazki.ru/preview-files/tachki-molniya-makvin-x-1024.jpg',
      'https://vilianov.com/wp-content/uploads/2011/06/multfilm-tachki-2.jpg',
      'https://s8.vcdn.biz/static/f/1039816601/image.jpg/pt/r375x0x4',
      'https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/c/o/tachki_2.jpg',
    ];

    return (
      <ScrollView>
        {/* Завдання №1 */}
        {photos.map((photo, index) => (
          <View key={index} style={styles.photoContainer}>
            <Image source={{ uri: photo }} style={styles.photo} />
            <Button
              title="Показати повідомлення"
              onPress={() => Alert.alert('Це фото з мультфільму Тачки')}
            />
          </View>
        ))}

        {/* Завдання №2 */}
        <View>
          <TextInput
            style={styles.input}
            placeholder="Введіть текст"
            onChangeText={(text) => this.handleText(text)}
          />
          <Text style={styles.displayText}>{this.state.inputText}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  photoContainer: {
    marginBottom: 20,
  },
  photo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    marginTop: 50
  },
  displayText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default App;
