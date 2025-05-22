import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const CustomButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.weatherButton} onPress={onPress}>
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  label: PropTypes.String,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  weatherButton: {
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 12,
    borderWidth: 1,
    marginBottom: 12,
    marginLeft: 4,
    backgroundColor: "#4a90e2",
    shadowColor: "#4a90e2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    borderColor: "#ccc",
    alignItems: "center",
  },
  textStyle: {
    color: "#fff",
  },
});
