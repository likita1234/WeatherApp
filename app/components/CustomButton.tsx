import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ label, onPress, iconName }) => {
  return (
    <TouchableOpacity style={styles.weatherButton} onPress={onPress}>
      {iconName && <FontAwesome name="search" size={18} color={"gray"} />}
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  weatherButton: {
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#CCC",
    marginBottom: 12,
    marginLeft: 4,
  },
  textStyle: {
    marginLeft: 10,
    color: "gray",
  },
});
