import { useContext } from "react";
import "../../scss/components/Settings.scss";
import ThemeContext from "../../context/theme.context";

function Settings() {
  const { dark, setDark, saveToLocalStorage } = useContext(ThemeContext);

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
      <div className="settings__btn">
        <i className="bi bi-gear"></i>
      </div>
    </div>
  );
}

export default Settings;
