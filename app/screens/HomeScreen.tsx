import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import WeatherCard from "../features/weather/components/WeatherCard";
import useWeather from "../features/weather/hooks/useWeather";
import { WeatherContext } from "../features/weather/context/WeatherContext";

const HomeScreen = () => {
  const [city, setCity] = useState("");
  const { weather, error } = useContext(WeatherContext);
  const { getWeather } = useWeather();

  const onButtonPress = () => {
    getWeather(city);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <CustomTextInput
          placeholder="Enter city name"
          value={city}
          onChange={(val: React.SetStateAction<string>) => setCity(val)}
        />
        <CustomButton label={"Get Weather"} onPress={() => onButtonPress()} />
      </View>
      {weather && <WeatherCard {...weather} />}
    </View>
  );
};

export default HomeScreen;
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
