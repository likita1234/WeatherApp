import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";

const SearchTextInput = ({ placeholder, value, onChange }) => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name="search" size={18} color="#888" style={styles.icon} />
      <View style={styles.subContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder ? placeholder : "Enter name"}
          value={value}
          onChangeText={onChange}
          autoCorrect={false}
          autoComplete="off"
          autoCapitalize="none"
        />
        {value?.length > 0 && (
          <TouchableOpacity onPress={() => onChange("")}>
            <FontAwesome
              name="times-circle"
              size={18}
              color="#888"
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchTextInput;

SearchTextInput.propTypes = {
  placeholder: PropTypes.String,
  value: PropTypes.String,
  onPress: PropTypes.func,
  onChange: PropTypes.func,
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  subContainer: {
    width: "80%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    marginRight: 6,
  },
  input: {
    width: "100%",
    fontSize: 16,
  },
  clearIcon: {
    marginLeft: 6,
  },
});
