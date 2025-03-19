import { createContext, useEffect, useState } from "react";

// variables
const ThemeContext = createContext();
const THEME_KEY = "theme";

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme !== null) {
      setDark(JSON.parse(savedTheme));
      return;
    }

    // Checking the system theme correctly
    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(isSystemDark);
    localStorage.setItem(THEME_KEY, JSON.stringify(isSystemDark));
  }, []);

  const saveToLocalStorage = (themeColor) => {
    setDark(themeColor);
    localStorage.setItem(THEME_KEY, JSON.stringify(themeColor));
  };

  return (
    <ThemeContext.Provider value={{ dark, setDark, saveToLocalStorage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
