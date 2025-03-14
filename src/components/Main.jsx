import PropTypes from "prop-types";
import "../scss/components/Main.scss";
import CurrentWeather from "./common/CurrentWeather";
import Forecast from "./common/Forecast";
function Main({
  getCurrentWeatherFunc,
  getHourlyForecastFunc,
  getDailyForecastFunc,
}) {
  return (
    <main className="main">
      <div className="container">
        <CurrentWeather getCurrentWeather={getCurrentWeatherFunc} />
        <Forecast
          type="hourly"
          title="HOURLY FORECAST"
          forecastData={getHourlyForecastFunc()}
        />
        <Forecast
          type="daily"
          title="21 DAYS FORECAST"
          forecastData={getDailyForecastFunc()}
        />
      </div>
    </main>
  );
}

Main.propTypes = {
  getCurrentWeatherFunc: PropTypes.func.isRequired,
  getHourlyForecast: PropTypes.func.isRequired,
  getDailyForecast: PropTypes.func.isRequired,
};

export default Main;
