import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

export const HomeScreen = () => {
  const [city, setCity] = useState("");
  const onButtonPress = () => {
    console.log("city", city);
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Enter city name"
        value={city}
        onChange={setCity}
      />
      <CustomButton label={"Get Weather"} onPress={onButtonPress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
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
