import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { WeatherCard } from "../features/weather/components/WeatherCard";

export const HomeScreen = () => {
  const [city, setCity] = useState("");
  const onButtonPress = () => {
    console.log("city", city);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <CustomTextInput
          placeholder="Enter city name"
          value={city}
          onChange={setCity}
        />
        <CustomButton label={"Get Weather"} onPress={onButtonPress()} />
      </View>
      <WeatherCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },
  subContainer: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
