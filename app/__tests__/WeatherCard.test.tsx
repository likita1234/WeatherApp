import React from "react";
import { render } from "@testing-library/react-native";
import WeatherCard from "@features/weather/components/WeatherCard"; // Adjust path
import { useTheme } from "@theme/ThemeContext";

// Mock useTheme
jest.mock("@theme/ThemeContext", () => ({
  useTheme: jest.fn(),
}));

describe("<WeatherCard />", () => {
  const mockWeatherData = {
    city: "London",
    icon: "https://example.com/icon.png",
    temperature: 18,
    condition: "Cloudy",
  };

  it("renders weather data correctly in light mode", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });

    const { getByTestId } = render(<WeatherCard {...mockWeatherData} />);

    expect(getByTestId("city").props.children).toBe("London");
    expect(getByTestId("temperature").props.children).toEqual([18, "°C"]);
    expect(getByTestId("condition").props.children).toBe("Cloudy");
    expect(getByTestId("weatherIcon").props.source.uri).toBe(
      mockWeatherData.icon
    );
  });

  it("dark theme styles is applied to weather card content i.e city", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "dark" });

    const { getByTestId } = render(<WeatherCard {...mockWeatherData} />);

    const cityStyles = getByTestId("city").props.style;

    const styleArray = Array.isArray(cityStyles) ? cityStyles : [cityStyles];

    const cityTextColor = styleArray.find(
      (style) => style && typeof style === "object" && "color" in style
    )?.color;

    expect(cityTextColor).toBe("#fff");
  });
});
