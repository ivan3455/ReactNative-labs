import React from "react";
import { StyleSheet, SafeAreaView, } from "react-native";
import Counter from "./Components/Counter";

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Counter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
