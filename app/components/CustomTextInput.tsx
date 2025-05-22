import React from "react";
import { StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";

const CustomTextInput = ({ placeholder, value, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder ? placeholder : "Enter name"}
      value={value}
      onChangeText={onChange}
      autoCorrect={false}
      autoComplete="off"
      autoCapitalize="none"
    />
  );
};

export default CustomTextInput;

CustomTextInput.propTypes = {
  placeholder: PropTypes.String,
  value: PropTypes.String,
  onPress: PropTypes.func,
  onChange: PropTypes.func,
};

const styles = StyleSheet.create({
  input: {
    width: "65%",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
});
