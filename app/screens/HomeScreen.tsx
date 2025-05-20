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

const HomeScreen = () => {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [locations, setLocations] = useState([]);

  const { weather, error } = useContext(WeatherContext);
  const { getWeather, loading } = useWeather();

  const handleLocation = (loc: { name: string }) => {
    setLocations([]);
    setShowSearchBar(false);
    getWeather(loc.name);
  };

  const handleSearch = (value: string) => {
    if (value.length > 2) {
      fetchLocations(value).then((data) => setLocations(data));
    }
  };
  const handleDebounce = useCallback(debounce(handleSearch, 500), []);

  const onButtonPress = () => {
    getWeather(city);
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      {weather && <WeatherCard {...weather} />}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={{
            width: "100%",
            marginTop: 30,
          }}
        >
          <SearchBar
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
            handleDebounce={handleDebounce}
          />
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
    padding: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
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
