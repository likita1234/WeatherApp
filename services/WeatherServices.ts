import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "0893809c273c4ad4ae0211233251905";


export const fetchWeather = async (city: string) => {
    try {
      // const response = await axios.get(BASE_URL, {
      //   params: {
      //     key: API_KEY,
      //     q: city,
      //   },
      // });
      // const data = response.data;
      const data = {
        location: {
          name: "London",
          region: "City of London, Greater London",
          country: "United Kingdom",
          lat: 51.5171,
          lon: -0.1062,
          tz_id: "Europe/London",
          localtime_epoch: 1747764382,
          localtime: "2025-05-20 19:06",
        },
        current: {
          last_updated_epoch: 1747764000,
          last_updated: "2025-05-20 19:00",
          temp_c: 20.2,
          temp_f: 68.4,
          is_day: 1,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000,
          },
          wind_mph: 5.1,
          wind_kph: 8.3,
          wind_degree: 33,
          wind_dir: "NNE",
          pressure_mb: 1019.0,
          pressure_in: 30.09,
          precip_mm: 0.0,
          precip_in: 0.0,
          humidity: 32,
          cloud: 0,
          feelslike_c: 20.2,
          feelslike_f: 68.4,
          windchill_c: 17.3,
          windchill_f: 63.2,
          heatindex_c: 17.3,
          heatindex_f: 63.2,
          dewpoint_c: 6.8,
          dewpoint_f: 44.2,
          vis_km: 10.0,
          vis_miles: 6.0,
          uv: 0.3,
          gust_mph: 7.7,
          gust_kph: 12.3,
        },
      };

      return {
        city: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        icon: "https:" + data.current.condition.icon,
      };
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        throw new Error("City not found");
      }
      throw new Error("Failed to fetch weather");
    }
  };