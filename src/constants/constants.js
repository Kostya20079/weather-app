export const DEFAULT_PLACE = {
  name: "Krakow",
  place_id: "krakow",
  adm_area1: "Lesser Poland",
  adm_area2: "Kraków",
  country: "Poland",
  lat: "50.06143N",
  lon: "19.93658E",
  timezone: "Europe/Warsaw",
  type: "settlement",
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: "auto",
  METRIC: "metric",
  UK: "uk",
  US: "us",
  CA: "ca",
};

export const UNITS = {
  metric: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "m/s",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  us: {
    temperature: "°F",
    precipitation: "in/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  uk: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  ca: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "km/h",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
};
