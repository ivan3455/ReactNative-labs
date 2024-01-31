import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Animated,
  useWindowDimensions,
  Easing,
} from "react-native";

const IMAGES = [
  require('./assets/image/1.jpg'),
  require('./assets/image/2.jpg'),
  require('./assets/image/3.jpg'),
];

const App = () => {
  // Значення для відстеження прокрутки ScrollView
  const scrollX = useRef(new Animated.Value(0)).current;

  // Отримання ширини вікна пристрою
  const { width: windowWidth } = useWindowDimensions();

  const [showWelcome, setShowWelcome] = useState(true);

  // Створення анімованого значення для управління прозорістю елемента вітання
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    // Анімація для зникнення елемента вітання після певного часу
    if (showWelcome) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 6000,
        easing: Easing.ease,
      }).start(() => {
        setShowWelcome(false);
      });
    }
  }, [showWelcome]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        {showWelcome && (
          <Animated.View
            style={[
              styles.welcomeContent,
              { opacity: fadeAnim },
            ]}
          >
            <Text style={styles.welcomeText}>Hello, this is test text!</Text>
          </Animated.View>
        )}
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
          scrollEventThrottle={1}
        >
          {IMAGES.map((image, imageIndex) => (
            <View
              style={{ width: windowWidth, height: 250 }}
              key={imageIndex}
            >
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </ScrollView>

        <View style={styles.indicatorContainer}>
          {IMAGES.map((image, imageIndex) => {
            const dotWidth = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width: dotWidth }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 4,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: 340,
  },
  welcomeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeContent: {
    backgroundColor: "lightblue",
    padding: 20,
    borderRadius: 10,
    height: 300,
    width: 300,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  normalDot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,.2)",
    marginHorizontal: 4,
  },
});

export default App;
