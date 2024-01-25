import React, { useState } from 'react';
import { Button, StyleSheet, Alert } from 'react-native';
import { Input, Heading, NativeBaseProvider, Text, Center, Stack } from 'native-base';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Об'єкт з користувачами та їхніми паролями
  const users = {
    testuser1: '12345678',
    testuser2: '11111111',
  };

  const styles = StyleSheet.create({
    topContainer: {
      marginTop: 40,
      alignItems: 'center',
    },
    centerText: {
      height: 40,
      borderRadius: 10,
      backgroundColor: 'lightgray',
    },
    inputField: {
      borderWidth: 3,
      borderColor: 'gray',
      borderRadius: 8,
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
    },
  });

  // Функція для перевірки логіну та пароля
  const userLogin = () => {
    if (users[email] === password) {
      Alert.alert('Successful', 'Authorization was successful', [
        {
          text: 'OK',
        },
      ]);
    } else {
      Alert.alert('Error', 'Incorrect login or password', [
        {
          text: 'OK',
        },
      ]);
    }
  };

  return (
    <NativeBaseProvider>
      <Stack style={styles.topContainer}>
        <Heading>Authotration</Heading>
      </Stack>

      <Center style={styles.centerText}>Email:</Center>
      <Input
        placeholder="Enter Email..."
        style={styles.inputField}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <Center style={styles.centerText}>Password:</Center>
      <Input
        placeholder="Enter Password..."
        style={styles.inputField}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      <Button title="Login" onPress={userLogin}>
        <Text>Login</Text>
      </Button>
    </NativeBaseProvider>
  );
}
