import React, { useState, createContext } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handlerTheme = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  const data = { darkMode, handlerTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
