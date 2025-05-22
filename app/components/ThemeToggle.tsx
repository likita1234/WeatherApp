import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { useTheme } from "@theme/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark" ? true : false);

  const toggleValue = () => {
    toggleTheme();
    setIsDark((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name={isDark ? "sun-o" : "moon-o"}
            size={20}
            color={isDark ? "orange" : "black"}
          />
        </View>
        <Switch
          value={isDark}
          onValueChange={toggleValue}
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
