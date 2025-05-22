import axios from "axios";

const WEATHER_URL = "https://api.weatherapi.com/v1/current.json";
const SEARCH_URL = "https://api.weatherapi.com/v1/search.json";
const API_KEY = "0893809c273c4ad4ae0211233251905";

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

export const fetchLocations = async (city: string) => {
  try {
    const response = await axios.get(SEARCH_URL, {
      params: {
        key: API_KEY,
        q: city,
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      throw new Error("City not found");
    }
  }
};
