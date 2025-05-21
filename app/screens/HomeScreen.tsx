import React, { useCallback, useContext, useState } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import WeatherCard from "../features/weather/components/WeatherCard";
import useWeather from "../features/weather/hooks/useWeather";
import { WeatherContext } from "../features/weather/context/WeatherContext";
import SearchBar from "../features/weather/components/SearchBar";
import { debounce } from "lodash";
import { fetchLocations } from "../../services/WeatherServices";
import LocationsList from "../features/weather/components/LocationsList";
import { useRouter } from "expo-router";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../../theme/ThemeContext";

const HomeScreen = () => {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState("");

  const { weather, error } = useContext(WeatherContext);
  const { getWeather, loading } = useWeather();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleLocation = (loc: { name: string }) => {
    setLocations([]);
    setShowSearchBar(false);
    getWeather(loc.name);
  };

  const handleSearch = (value: string) => {
    if (value) {
      value.length > 2
        ? fetchLocations(value).then((data) => setLocations(data)) &&
          setInfo("")
        : setInfo("Please enter atleast 3 characters");
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
          {locations.length > 0 && showSearchBar && (
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
