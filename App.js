import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Components/HomeScreen";
import ContactsScreen from "./Components/ContactsScreen";
import GalleryScreen from "./Components/GalleryScreen";

// Створення стеку навігації за допомогою createStackNavigator
const Stack = createStackNavigator();

const App = () => {
  return (
    // Обгортка додатку в компонент NavigationContainer для використання навігаційних можливостей
    <NavigationContainer>
      {/* Створення стеку навігації з початковим екраном HomeScreen */}
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* Додавання екранів до стеку з відповідними іменами та компонентами */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
        <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
