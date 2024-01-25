import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [bgColor, setBgColor] = useState(`rgb(${red}, ${green}, ${blue})`);

  // Оновлення кольору блоку
  const updateColor = () => {
    setBgColor(`rgb(${red}, ${green}, ${blue})`);
  };

  // Збільшення розміру блоку
  const increaseSize = () => {
    setWidth((prevWidth) => prevWidth + 10);
    setHeight((prevHeight) => prevHeight + 10);
  };

  // Зменшення розміру блоку
  const decreaseSize = () => {
    setWidth((prevWidth) => prevWidth - 10);
    setHeight((prevHeight) => prevHeight - 10);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.buttonText}>Increase/decrease button size</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainer1}>
          <Button title="+" onPress={increaseSize} />
        </View>
        <View style={styles.buttonContainer1}>
          <Button title="-" onPress={decreaseSize} />
        </View>
      </View>
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: bgColor,
        }}
      ></View>
      <TextInput
        placeholder="Input R (0-255)"
        keyboardType="numeric"
        onChangeText={(text) => setRed(text)}
      />
      <TextInput
        placeholder="Input G (0-255)"
        keyboardType="numeric"
        onChangeText={(text) => setGreen(text)}
      />
      <TextInput
        placeholder="Input B (0-255)"
        keyboardType="numeric"
        onChangeText={(text) => setBlue(text)}
      />
      <Button title="Change color" onPress={updateColor} />
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
          <View style={styles.tableCell}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonContainer1: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    marginBottom: 10,
  },
  tableContainer: {
    flexDirection: 'column',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
    margin: 5,
  },
});
