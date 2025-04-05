import { createContext, useEffect, useState } from "react";
import { getWeatherData } from "./../api";
import {
  DEFAULT_PLACE,
  MEASUREMENT_SYSTEMS,
  UNITS,
} from "../constants/constants";

const MEASUREMENT_KEY = "measurement-system";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(
    JSON.parse(localStorage.getItem("place")) || DEFAULT_PLACE
  );
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourForecast, setHourlyForecast] = useState([]);
  const [dayForecast, setDailyForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState(
    JSON.parse(localStorage.getItem(MEASUREMENT_KEY)) ||
      MEASUREMENT_SYSTEMS.AUTO
  );
  const [units, setUnits] = useState({});

  useEffect(() => {
    async function _getWeatherData() {
      // Get current weather data
      const currentData = await getWeatherData(
        "current",
        place.place_id,
        measurementSystem
      );
      setCurrentWeather(currentData.current);
      // set units to state
      setUnits(UNITS[currentData.units]);

      // Get hourly forecast
      const hourlyData = await getWeatherData(
        "hourly",
        place.place_id,
        measurementSystem
      );
      setHourlyForecast(hourlyData.hourly.data);

      // Get daily forecast
      const dailyData = await getWeatherData(
        "daily",
        place.place_id,
        measurementSystem
      );
      setDailyForecast(dailyData.daily.data);

      setLoading(false);
    }

    _getWeatherData();
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        loading,
        currentWeather,
        hourForecast,
        dayForecast,
        measurementSystem,
        setMeasurementSystem,
        units,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
