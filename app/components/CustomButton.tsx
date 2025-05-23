import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  label: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.weatherButton} onPress={onPress}>
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
    marginLeft: 4,
    shadowColor: "#4a90e2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    borderColor: "#ccc",
    alignItems: "center",
    backgroundColor: "#4a90e2",
  },
  textStyle: {
    color: "#fff",
  },
});
