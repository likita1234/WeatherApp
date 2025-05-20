import HomeScreen from "./screens/HomeScreen";
import WeatherProvider from "./features/weather/context/WeatherContext";
import { ThemeProvider } from "../theme/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <HomeScreen />
      </WeatherProvider>
    </ThemeProvider>
  );
};

export default App;
