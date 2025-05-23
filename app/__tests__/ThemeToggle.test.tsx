import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ReactNative from "react-native";

import ThemeToggle from "../components/ThemeToggle"; // adjust path
import { ThemeProvider } from "@theme/ThemeContext";

// Setup local storage mocking
jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

jest.spyOn(ReactNative, "useColorScheme");

describe("ThemeToggle Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("show sun icon and switch should off when theme is light", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue("light");
    (ReactNative.useColorScheme as jest.Mock).mockReturnValue("light");

    const { getByRole } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    await waitFor(() => {
      const switchComponent = getByRole("switch");
      expect(switchComponent.props.value).toBe(false);
    });
  });

  it("show moon icon and switch should be on when theme is dark", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue("dark");
    (ReactNative.useColorScheme as jest.Mock).mockReturnValue("light");

    const { getByRole } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    await waitFor(() => {
      const switchComponent = getByRole("switch");
      expect(switchComponent.props.value).toBe(true);
    });
  });

  it("toggling theme updates AsyncStorage data to dark and light one at a time", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue("light");
    (ReactNative.useColorScheme as jest.Mock).mockReturnValue("light");

    const { getByRole } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    // Initially this will be light mode so Off
    await waitFor(() => {
      expect(getByRole("switch").props.value).toBe(false);
    });

    await act(async () => {
      fireEvent(getByRole("switch"), "valueChange", true);
    });

    await waitFor(() => {
      expect(getByRole("switch").props.value).toBe(true);
      expect(AsyncStorage.setItem).toHaveBeenCalledWith("currentTheme", "dark");
    });

    await act(async () => {
      fireEvent(getByRole("switch"), "valueChange", false);
    });

    await waitFor(() => {
      expect(getByRole("switch").props.value).toBe(false);
      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        "currentTheme",
        "light"
      );
    });
  });
});
