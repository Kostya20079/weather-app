import PropTypes from "prop-types";

function InfoWidgets({ data }) {
  const { precipitation, wind, humidity, uv_index, cloud_cover, visibility } =
    data;

  const infoWidgets = [
    {
      id: 0,
      icon: "droplet",
      name: "Precipitation",
      value: Math.round(precipitation.total),
      unit: "mm/h",
    },
    {
      id: 1,
      icon: "wind",
      name: "Wind",
      value: Math.round(wind.speed),
      unit: "m/s",
    },
    {
      id: 2,
      icon: "moisture",
      name: "Humidity",
      value: Math.round(humidity),
      unit: "%",
    },
    {
      id: 3,
      icon: "sunglasses",
      name: "UV index",
      value: Math.round(uv_index),
      unit: "",
    },
    {
      id: 4,
      icon: "clouds-fill",
      name: "Clouds cover",
      value: Math.round(cloud_cover),
      unit: "%",
    },
    {
      id: 5,
      icon: "eye",
      name: "Visibility",
      value: Math.round(visibility),
      unit: "km",
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
};

export default InfoWidgets;
