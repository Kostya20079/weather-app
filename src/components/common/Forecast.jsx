import "../../scss/components/Forecast.scss";
import PropTypes from "prop-types";
import DayInfoWidget from "../ui/DayInfoWidget";
import HourInfoWidget from "../ui/HourInfoWidget";
import HorizontalScroll from "../ui/HorizontalScroll";
import ScrollButtons from "../ui/ScrollButtons";
import { useRef } from "react";

function Forecast({ type, title, forecastData }) {
  const scrollRef = useRef();
  return (
    <section className="forecast">
      <h3>{title}</h3>
      <div className="forecast__container">
        <ScrollButtons scrollRef={scrollRef} />
        <HorizontalScroll scrollRef={scrollRef}>
          {forecastData?.map((singleData, index) => (
            <div className="widget" key={index}>
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

Forecast.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
};

export default Forecast;
