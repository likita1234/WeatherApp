import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface SearchTextInputProps {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
}

const SearchTextInput: React.FC<SearchTextInputProps> = ({
  placeholder = "Enter name",
  value,
  onChange,
}) => {
  const handleClear = () => onChange("");

  return (
    <View style={styles.inputContainer}>
      <FontAwesome name="search" size={18} color="#888" style={styles.icon} />
      <View style={styles.subContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          autoCorrect={false}
          autoComplete="off"
          autoCapitalize="none"
        />
        {value.length > 0 && (
          <TouchableOpacity
            onPress={handleClear}
            accessibilityLabel="Clear search button"
            accessibilityRole="button"
            testID="clear-btn"
          >
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  clearIcon: {
    marginLeft: 6,
  },
});
