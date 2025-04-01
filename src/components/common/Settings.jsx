import { useContext, useState } from "react";
import { MEASUREMENT_SYSTEMS } from "../../constants/constants";
import "../../scss/components/Settings.scss";
import ThemeContext from "../../context/theme.context";
import WeatherContext from "../../context/weather.context";

function Settings() {
  const [openSettings, setOpenSettings] = useState(false);

  const { dark, setDark, saveToLocalStorage } = useContext(ThemeContext);

  const { measurementSystem, setMeasurementSystem } =
    useContext(WeatherContext);

  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system);
    localStorage.setItem("measurement-system", JSON.stringify(system));
    setOpenSettings(false);
  };

  const toggleTheme = () => {
    setDark((prevColor) => {
      const newColor = !prevColor;
      saveToLocalStorage(newColor); // Save the updated value
      return newColor;
    });
  };

  return (
    <div className="settings">
      <div className="theme-toggler">
        <div className="theme-buttons" onClick={toggleTheme}>
          <div className={`light-theme-btn ${dark ? "" : "active"}`}>
            <i className="bi bi-sun"></i>
          </div>
          <div className={`dark-theme-btn ${dark ? "active" : ""}`}>
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <div
        className="settings__btn"
        onClick={() => setOpenSettings((prev) => !prev)}
      >
        <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
      </div>
      <div className={`settings__menu ${openSettings ? "open" : ""}`}>
        <div className="measurement-systems">
          <h4>Measurement system: </h4>
          <div className="systems">
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <div
                className={`system ${
                  system === measurementSystem ? "active" : ""
                }`}
                key={system}
                onClick={() => changeMeasurementSystem(system)}
              >
                {system}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
