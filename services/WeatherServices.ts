import axios from "axios";

const WEATHER_URL = `${process.env.EXPO_PUBLIC_API_URL}current.json`;
const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(WEATHER_URL, {
      params: {
        key: API_KEY,
        q: city,
      },
    });
    const data = response.data;

    return {
      city: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      icon: "https:" + data.current.condition.icon,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      throw new Error("Failed to fetch weather");
    }
  }
};
