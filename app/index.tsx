import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import CustomTextInput from "./components/CustomTextInput";
import CustomButton from "./components/CustomButton";

const Home = () => {
  const [city, setCity] = useState("");
  const onButtonPress = () => {
    console.log("city", city);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <View style={styles.subContainer}>
        <CustomTextInput
          placeholder="Enter city name"
          value={city}
          onChange={setCity}
        />
        <CustomButton label={"Get Weather"} onPress={onButtonPress()} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#F0F4F8",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
});
