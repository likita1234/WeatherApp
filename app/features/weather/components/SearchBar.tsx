import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";

const SearchBar = ({
  showSearchBar,
  setShowSearchBar,
  handleChange,
  value,
  clearSearchValue,
}) => {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      {showSearchBar ? (
        <View style={styles.searchContainer}>
          <TextInput
            value={value}
            autoFocus={true}
            onChangeText={handleChange}
            placeholder="Search City"
            style={styles.input}
          />
          {value && (
            <TouchableOpacity
              onPress={() => {
                clearSearchValue();
              }}
              style={styles.clearButton}
            >
              <FontAwesome name="close" size={20} />
            </TouchableOpacity>
          )}
        </View>
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
  handleChange: PropTypes.func,
  value: PropTypes.string,
  clearSearchValue: PropTypes.func,
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
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
  searchContainer: {
    flexDirection: "row",
  },
  clearButton: {
    width: "10%",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
});
