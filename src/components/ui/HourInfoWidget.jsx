import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";
import { useContext } from "react";
import WeatherContext from "../../context/weather.context";

function HourInfoWidget({ data }) {
  const { date, icon, summary, temperature, precipitation, wind } = data;

  const { units } = useContext(WeatherContext);

  const today_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date().setMinutes(0)),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date).setMinutes(0)),
  };

  // get local representation of midnight
  const midnight = new Intl.DateTimeFormat(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date().setHours(0, 0, 0, 0));

  weather_date.day =
    weather_date.day === today_date.day && weather_date.time === today_date.time
      ? "Now"
      : weather_date.time === midnight
      ? weather_date.day
      : "";

  return (
    <>
      <div className="day">{weather_date.day}</div>
      <div className="time">{weather_date.time}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon numOfIcon={icon} alt={summary} />
        </div>
        <div className="temperature">{Math.round(temperature)} {units.temperature}</div>
      </div>
      <div className="precipitation">
        {precipitation.total} {units.precipitation}
      </div>
      <div className="wind">
        <div className="speed">{wind.speed} {units.wind_speed}</div>
        <div
          className="dir"
          style={{ transform: `rotate(${-45 + wind.angle}deg)` }}
        >
          <i className="bi bi-send-fill"></i>
        </div>
      </div>
    </>
  );
}

HourInfoWidget.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HourInfoWidget;
