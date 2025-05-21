import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";

const SearchBar = ({ showSearchBar, setShowSearchBar, handleDebounce }) => {
  return (
    <View style={{ alignItems: "center" }}>
      {showSearchBar ? (
        <TextInput
          autoFocus={true}
          onChangeText={handleDebounce}
          placeholder="Search City"
          style={styles.input}
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            setShowSearchBar(!showSearchBar);
          }}
          style={styles.searchButton}
        >
          <FontAwesome name="search" size={30} color={"white"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  showSearchBar: PropTypes.bool,
  setShowSearchBar: PropTypes.func,
  handleDebounce: PropTypes.func,
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: "#FFF",
  },
  searchButton: {
    backgroundColor: "gray",
    borderRadius: 40,
    padding: 20,
  },
});
