import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Weather = {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
};

type ContextType = {
  weather: Weather | null;
  setWeather: (weather: Weather) => void;
  error: string | null;
  setError: (err: string | null) => void;
};

export const WeatherContext = createContext<ContextType>({
  weather: null,
  setWeather: () => {},
  error: null,
  setError: () => {},
});

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeatherState] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);

  const setWeather = (data: Weather) => {
    setWeatherState(data);
    AsyncStorage.setItem("lastCity", JSON.stringify(data));
  };

  useEffect(() => {
    const loadLast = async () => {
      const last = await AsyncStorage.getItem("lastCity");
      if (last) setWeatherState(JSON.parse(last));
    };
    loadLast();
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, setWeather, error, setError }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
