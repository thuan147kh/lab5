import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    if (theme) document.documentElement.dataset.theme = "light";
    else document.documentElement.dataset.theme = "dark";
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = "light";
  }, []);

  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
