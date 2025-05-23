import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "@theme/ThemeContext";
import { Weather } from "@customTypes/weather";

const { width } = Dimensions.get("window");

const WeatherCard = (weather: Weather) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <View style={styles.card}>
      <Text testID="city" style={[styles.city, isDark && { color: "#fff" }]}>
        {weather.city}
      </Text>
      <Image
        testID="weatherIcon"
        source={{ uri: weather.icon }}
        style={styles.icon}
      />
      <Text
        testID="temperature"
        style={[styles.temp, isDark && { color: "#fff" }]}
      >
        {weather.temperature}°C
      </Text>
      <Text
        testID="condition"
        style={[styles.condition, isDark && { color: "#fff" }]}
      >
        {weather.condition}
      </Text>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    alignSelf: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
    alignItems: "center",
  },
  city: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  icon: {
    width: 120,
    height: 120,
  },
  temp: {
    fontSize: 35,
    fontWeight: "600",
  },
  condition: {
    fontSize: 35,
    marginTop: 10,
    fontStyle: "italic",
  },
});
