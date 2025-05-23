import React, { useCallback, useContext, useState } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { debounce } from "lodash";

import ThemeToggle from "@components/ThemeToggle";
import WeatherCard from "@features/weather/components/WeatherCard";
import { WeatherContext } from "@features/weather/context/WeatherContext";

import useWeather from "@features/weather/hooks/useWeather";
import { useTheme } from "@theme/ThemeContext";
import SearchTextInput from "@features/weather/components/SearchTextInput";
import CustomButton from "@components/CustomButton";

const HomeScreen = () => {
  const [cityName, setCityName] = useState("");

  const { weather, error } = useContext(WeatherContext);
  const { getWeather, loading } = useWeather();
  const { isDark } = useTheme();

  const getWeatherData = () => {
    getWeather(cityName);
  };

  const handleSearch = (value: string): void => {
    setCityName(value);
  };

  const handleDebounce = useCallback(debounce(handleSearch, 500), []);

  const handleTextChange = (value: string) => {
    setCityName(value);
    handleDebounce(value);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#121212" : "#FFFAFA" },
      ]}
    >
      <Text style={[styles.title, isDark && { color: "#fff" }]}>
        Weather App
      </Text>

      <ThemeToggle />

      <View style={styles.searchContainer}>
        <SearchTextInput
          value={cityName}
          onChange={handleTextChange}
          placeholder="Search City"
        />
        <CustomButton label="Get Weather" onPress={getWeatherData} />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      {loading ? (
        <ActivityIndicator />
      ) : (
        weather && <WeatherCard {...weather} />
      )}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  subContainer: {
    alignItems: "center",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  error: {
    color: "red",
    marginLeft: 20,
    marginTop: 10,
  },
  searchContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  clearButton: {
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
});
