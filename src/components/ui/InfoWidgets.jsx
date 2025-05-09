import PropTypes from "prop-types";

function InfoWidgets({ data, units }) {
  const { precipitation, wind, humidity, uv_index, cloud_cover, visibility } =
    data;

  const infoWidgets = [
    {
      id: 0,
      icon: "droplet",
      name: "Precipitation",
      value: precipitation.total,
      unit: units.precipitation,
    },
    {
      id: 1,
      icon: "wind",
      name: "Wind",
      value: Math.round(wind.speed),
      unit: units.wind_speed,
    },
    {
      id: 2,
      icon: "moisture",
      name: "Humidity",
      value: Math.round(humidity),
      unit: units.humidity,
    },
    {
      id: 3,
      icon: "sunglasses",
      name: "UV index",
      value: Math.round(uv_index),
      unit: units.uv_index,
    },
    {
      id: 4,
      icon: "clouds-fill",
      name: "Clouds cover",
      value: Math.round(cloud_cover),
      unit: units.cloud_cover,
    },
    {
      id: 5,
      icon: "eye",
      name: "Visibility",
      value: Math.round(visibility),
      unit: units.visibility,
    },
  ];

  return (
    <>
      {infoWidgets.map(({ id, icon, name, value, unit }) => (
        <div className="widget" key={id}>
          <div className="widget__container">
            <div className="info">
              <div className="icon">
                <i className={`bi bi-${icon}`}></i>
              </div>
              <div className="value">
                {value} {unit}
              </div>
            </div>
            <div className="name">{name}</div>
          </div>
        </div>
      ))}
    </>
  );
}

InfoWidgets.propTypes = {
  data: PropTypes.array.isRequired,
  units: PropTypes.object.isRequired,
};

export default InfoWidgets;
