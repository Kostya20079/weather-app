import "../../scss/components/Forecast.scss";
import PropTypes from "prop-types";
import DayInfoWidget from "../ui/DayInfoWidget";
import HourInfoWidget from "../ui/HourInfoWidget";

function Forecast({ type, title, forecastData }) {
  return (
    <div className="forecast">
      <div className="forecast__container">
        <h3>{title}</h3>
        <div className="widget-container">
          {forecastData.map((singleData) => (
            <>
              {type === "hourly" ? (
                <HourInfoWidget data={singleData} />
              ) : (
                <DayInfoWidget data={singleData} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

Forecast.protoTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
};

export default Forecast;
