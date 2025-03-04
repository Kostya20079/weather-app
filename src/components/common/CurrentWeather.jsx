import PropTypes from "prop-types";
import "../../scss/components/CurrentWeather.scss";
import InfoWidgets from "../ui/InfoWidgets";

function CurrentWeather({ getCurrentWeather }) {
  const data = getCurrentWeather();
  const { icon_num, summary, temperature, feels_like } = data;

  return (
    <div className="current-weather">
      <div className="temperature">
        <div className="weather-icon">
          <img
            src={`${
              import.meta.env.VITE_WEATHER_ICONS_URL
            }/set04/big/${icon_num}.png`}
            alt={summary}
          />
        </div>
        <div className="value">
          <div className="temperature-value">{temperature} °C</div>
          <div className="feels-like">fells like {feels_like} °C</div>
        </div>
        <div className="summary">{summary}</div>
      </div>
      <div className="other-info-widgets">
        <InfoWidgets data={data} />
      </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  getCurrentWeather: PropTypes.func.isRequired,
};

export default CurrentWeather;
