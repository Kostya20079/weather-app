import PropTypes from "prop-types";
import "../../scss/components/CurrentWeather.scss";
import InfoWidgets from "../ui/InfoWidgets";
import WeatherIcon from "../ui/WeatherIcon";

function CurrentWeather({ getCurrentWeather }) {
  const data = getCurrentWeather();
  const { icon_num, summary, temperature, feels_like } = data;

  return (
    <div className="current-weather">
      <div className="temperature">
        <WeatherIcon numOfIcon={icon_num} alt={summary}/>
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
