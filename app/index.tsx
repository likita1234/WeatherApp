import { Text, View, StyleSheet } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#F0F4F8",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
});
