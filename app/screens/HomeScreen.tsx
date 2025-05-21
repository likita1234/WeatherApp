import React, { useCallback, useContext, useState } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { debounce } from "lodash";

import ThemeToggle from "@components/ThemeToggle";
import SearchBar from "@features/weather/components/SearchBar";
import WeatherCard from "@features/weather/components/WeatherCard";
import LocationsList from "@features/weather/components/LocationsList";
import { WeatherContext } from "@features/weather/context/WeatherContext";

import useWeather from "@features/weather/hooks/useWeather";
import { fetchLocations } from "@services/WeatherServices";
import { useTheme } from "@theme/ThemeContext";
import { Location } from "../types/location";

const HomeScreen = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState("");

  const { weather, error } = useContext(WeatherContext);
  const { getWeather, loading } = useWeather();
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const [cityName, setCityName] = useState("");

  const handleLocation = (loc: { name: string }) => {
    setLocations([]);
    setShowSearchBar(false);
    getWeather(loc.name);
  };

  const handleSearch = (value: string): void => {
    setCityName(value);
    if (value) {
      if (value.length > 2) {
        fetchLocations(value).then((data: Location[]) => {
          setLocations(data);
          setInfo("");
        });
      } else {
        setInfo("Please enter at least 3 characters");
      }
    } else {
      setInfo("");
    }
  };

  const handleDebounce = useCallback(debounce(handleSearch, 500), []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#121212" : "#fff" },
      ]}
    >
      <Text style={[styles.title, isDark && { color: "#fff" }]}>
        Weather App
      </Text>
      <ThemeToggle />
      {error && <Text style={styles.error}>{error}</Text>}
      {weather && <WeatherCard {...weather} />}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={{
            margin: 30,
          }}
        >
          <SearchBar
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
            handleDebounce={handleDebounce}
          />
          {info && <Text>{info}</Text>}
          {cityName.length > 2 && locations.length > 0 && (
            <LocationsList
              locations={locations}
              handleLocation={handleLocation}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
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
