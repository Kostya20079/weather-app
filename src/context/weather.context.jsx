import { createContext, useEffect, useState } from "react";
import { getWeatherData } from "./../api";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEMS } from "../constants/constants";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourForecast, setHourlyForecast] = useState([]);
  const [dayForecast, setDailyForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_SYSTEMS.AUTO
  );

  useEffect(() => {
    async function _getWeatherData() {
      // Get current weather data
      const currentData = await getWeatherData(
        "current",
        place.place_id,
        "auto"
      );
      setCurrentWeather(currentData.current);

      // Get hourly forecast
      const hourlyData = await getWeatherData("hourly", place.place_id, "auto");
      setHourlyForecast(hourlyData.hourly.data);

      // Get daily forecast
      const dailyData = await getWeatherData("daily", place.place_id, "auto");
      setDailyForecast(dailyData.daily.data);

      setLoading(false);
    }

    _getWeatherData();
  }, [place]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        loading,
        currentWeather,
        hourForecast,
        dayForecast,
        measurementSystem,
        setMeasurementSystem,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
