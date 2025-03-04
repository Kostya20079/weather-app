import PropTypes from "prop-types";
import "../scss/components/Main.scss";
import CurrentWeather from "./common/CurrentWeather";

function Main({ getCurrentWeatherFunc }) {
  return (
    <main className="main">
      <div className="container">
        <CurrentWeather getCurrentWeather={getCurrentWeatherFunc} />
      </div>
    </main>
  );
}

Main.propTypes = {
  getCurrentWeatherFunc: PropTypes.func.isRequired,
};

export default Main;
