import "../../scss/components/Forecast.scss";
import PropTypes from "prop-types";
import DayInfoWidget from "../ui/DayInfoWidget";
import HourInfoWidget from "../ui/HourInfoWidget";
import HorizontalScroll from "../ui/HorizontalScroll";
import MoveButtons from "../ui/MoveButtons";
import { useRef } from "react";

function Forecast({ type, title, forecastData }) {
  const scrollRef = useRef();

  return (
    <section className="forecast">
      <div className="forecast__container">
        <h3>{title}</h3>
        <MoveButtons scrollRef={scrollRef} />
        <HorizontalScroll scrollRef={scrollRef}>
          {forecastData.map((singleData) => (
            <div className="widget" key={singleData.date || singleData.day}>
              {type === "hourly" ? (
                <HourInfoWidget data={singleData} />
              ) : (
                <DayInfoWidget data={singleData} />
              )}
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}

Forecast.protoTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
};

export default Forecast;
