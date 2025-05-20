import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { useTheme } from "../../theme/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Button
        title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
        onPress={toggleTheme}
      />
    </View>
  );
};

export default ThemeToggle;

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
});
