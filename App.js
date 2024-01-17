import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, Alert, TouchableOpacity, View, Button } from "react-native";

export default function App() {
  const handleTextPress = () => Alert.alert("Alert window");

  const handleButtonPress = () => Alert.alert(
    'Simple ALert',
      'Alert text',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ], { cancelable: false }
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleTextPress} style={styles.textContainer}>
        <View>
          <Text numberOfLines={1} style={styles.text}>
            Text
          </Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleButtonPress}
          title="Button"
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "green",
  },
  buttonContainer: {
    paddingTop: 10,
  },
  text: {
    padding: 60,
    color: "yellow",
  },
});
