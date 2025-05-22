import React from "react";
import { View, StyleSheet, Switch } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useTheme } from "@theme/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name={isDark ? "moon-o" : "sun-o"}
            size={20}
            color={isDark ? "orange" : "black"}
          />
        </View>
        <Switch
          value={isDark}
          onValueChange={handleToggle}
          thumbColor={isDark ? "#fff" : "#f4f3f4"}
        />
      </View>
    </View>
  );
};

export default ThemeToggle;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  subContainer: {
    flexDirection: "row",
  },
  iconContainer: {
    justifyContent: "center",
    marginRight: 4,
  },
});
