import "./scss/components/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getCurrentWeather, getDailyForecast, getHourlyForecast } from "./api";

function App() {
  let dark = true;

  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Header />
      <Main
        getCurrentWeatherFunc={getCurrentWeather}
        getHourlyForecastFunc={getHourlyForecast}
        getDailyForecastFunc={getDailyForecast}
      />
    </div>
  );
}

export default App;
