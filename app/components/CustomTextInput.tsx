import { StyleSheet, TextInput } from "react-native";

const CustomTextInput = ({ placeholder, value, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder ? placeholder : "Enter name"}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: "#FFF",
  },
});
