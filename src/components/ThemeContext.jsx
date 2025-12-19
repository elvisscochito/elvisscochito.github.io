import { createContext, /* useContext, */ useEffect, useState } from "react";

const ThemeContext = createContext();

/* light | dark | system */
const THEME_KEY = "preferred-theme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log(`Switched to ${theme === "light" ? "dark" : "light"} mode`);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
