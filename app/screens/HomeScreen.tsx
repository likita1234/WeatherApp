import React, { useCallback, useContext, useState } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { debounce } from "lodash";

import ThemeToggle from "@components/ThemeToggle";
import WeatherCard from "@features/weather/components/WeatherCard";
import LocationsList from "@features/weather/components/LocationsList";
import { WeatherContext } from "@features/weather/context/WeatherContext";

import useWeather from "@features/weather/hooks/useWeather";
import { fetchLocations } from "@services/WeatherServices";
import { useTheme } from "@theme/ThemeContext";
import { Location } from "../types/location";
import CustomTextInput from "@components/CustomTextInput";
import CustomButton from "@components/CustomButton";

const HomeScreen = () => {
  const [locations, setLocations] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [cityName, setCityName] = useState("");

  const { weather, error } = useContext(WeatherContext);
  const [info, setInfo] = useState(error ? error : "");
  const { getWeather, loading } = useWeather();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const handleLocation = (loc: { name: string }) => {
    setCityName(loc.name);
    setLocations([]);
  };

  const getWeatherData = () => {
    getWeather(cityName);
  };

  const handleSearch = (value: string): void => {
    setCityName(value);
    if (value) {
      if (value.length > 2) {
        fetchLocations(value).then((data: Location[]) => {
          setLocations(data);
          setInfo("");
          setDropdownVisible(true);
        });
      } else {
        setInfo("Please enter at least 3 characters");
      }
    } else {
      setInfo("");
    }
  };

  const handleDebounce = useCallback(debounce(handleSearch, 500), []);

  const handleTextChange = (value: string) => {
    setCityName(value);
    handleDebounce(value);
  };

  const handleOutsidePress = () => {
    if (isDropdownVisible) {
      setDropdownVisible(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
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
          <CustomTextInput
            value={cityName}
            onChange={handleTextChange}
            placeholder="Search City"
          />
          <CustomButton
            label="Get Weather"
            onPress={getWeatherData}
            disable={cityName.length <= 2}
          />
        </View>

        {info && <Text style={styles.error}>{info}</Text>}
        {cityName.length > 2 && locations.length > 0 && isDropdownVisible && (
          <LocationsList
            locations={locations}
            handleLocation={handleLocation}
          />
        )}

        {loading && !weather ? (
          <ActivityIndicator />
        ) : (
          <WeatherCard {...weather} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
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
