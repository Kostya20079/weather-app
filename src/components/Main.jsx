import "../scss/components/Main.scss";
import CurrentWeather from "./common/CurrentWeather";
import Forecast from "./common/Forecast";
import { useContext } from "react";
import WeatherContext from "./../context/weather.context";
import Loader from "./ui/Loader";
function Main() {
  const { loading, currentWeather, hourForecast, dayForecast } =
    useContext(WeatherContext);

  return (
    <main className="main">
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <CurrentWeather currentWeatherData={currentWeather} />
          <Forecast
            type="hourly"
            title="Hour forecast"
            forecastData={hourForecast}
          />
          <Forecast
            type="daily"
            title="21 Days forecast"
            forecastData={dayForecast}
          />
        </div>
      )}
    </main>
  );
}

export default Main;
