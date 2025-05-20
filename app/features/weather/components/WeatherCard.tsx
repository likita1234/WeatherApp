import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
};

export const WeatherCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{"London"}</Text>
      <Image
        source={require("../../../assets/images/sunImg.jpg")}
        style={styles.icon}
      />
      <Text style={styles.temp}>{40}°C</Text>
      <Text style={styles.condition}>{"Hot"}</Text>
    </View>
  );
};

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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  icon: {
    width: 80,
    height: 80,
  },
  temp: {
    fontSize: 30,
    fontWeight: "600",
  },
  condition: {
    fontSize: 20,
    marginTop: 10,
    fontStyle: "italic",
  },
});
