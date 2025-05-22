import { useContext, useState } from "react";
import { fetchWeather } from "@services/WeatherServices";
import { WeatherContext } from "@features/weather/context/WeatherContext";

const useWeather = () => {
  const { setWeather, setError } = useContext(WeatherContext);
  const [loading, setLoading] = useState(false);

  const getWeather = async (city: string) => {
    setLoading(true);
    try {
      const data = await fetchWeather(city);
      if(data){
      setWeather(data);
      setError(null);
      }
    } catch {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return { getWeather, loading };
};
export default useWeather;
