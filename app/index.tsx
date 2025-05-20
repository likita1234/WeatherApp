import { Text, View, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import WeatherProvider from "./features/weather/context/WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Weather App</Text>
        <HomeScreen />
      </View>
    </WeatherProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
});
