import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";

function DayInfoWidget({ data }) {
  const {
    day,
    icon,
    temperature_max,
    temperature_min,
    summary,
    precipitation,
  } = data;

  const today_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };

  weather_date.day =
    weather_date.day === today_date.day ? "Today" : weather_date.day;

  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon numOfIcon={icon} alt={summary} />
        </div>
        <div className="temperature">
          <div className="max">{Math.round(temperature_max)} ℃</div>
          <div className="min">{Math.round(temperature_min)} ℃</div>
        </div>
      </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} mm/h
      </div>
    </div>
  );
}

DayInfoWidget.protoTypes = {
  data: PropTypes.array.isRequired,
};

export default DayInfoWidget;
