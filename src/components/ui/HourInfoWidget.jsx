import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";

function HourInfoWidget({ data }) {
  const { date, icon, summary, temperature, precipitation, wind } = data;

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

  weather_date.day =
    weather_date.day === today_date.day && weather_date.time === today_date.time
      ? "Today"
      : weather_date.time === "12:00 AM"
      ? weather_date.day
      : "";

  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="time">{weather_date.time}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon numOfIcon={icon} alt={summary} />
        </div>
        <div className="temperature">{Math.round(temperature)} ℃</div>
      </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} mm/h
      </div>
      <div className="wind">
        <div className="speed">{wind.speed} mph</div>
        <div
          className="dir"
          style={{ transform: `rotate(${-45 + wind.angle}deg)` }}
        >
          <i className="bi bi-send-fill"></i>
        </div>
      </div>
    </div>
  );
}

HourInfoWidget.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HourInfoWidget;
