import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.weatherButton} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  weatherButton: {
    paddingHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#CCC",
    marginBottom: 12,
    marginLeft: 4,
  },
});
