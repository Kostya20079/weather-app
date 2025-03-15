function WeatherIcon({ numOfIcon, alt }) {
  return (
    <div className="weather-icon">
      <img
        src={`${
          import.meta.env.VITE_WEATHER_ICONS_URL
        }/set04/big/${numOfIcon}.png`}
        alt={alt}
      />
    </div>
  );
}

export default WeatherIcon;
