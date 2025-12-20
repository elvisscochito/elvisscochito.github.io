import { createContext, /* useContext, */ useEffect, useState } from "react";

const ThemeContext = createContext();

/* light | dark | system */
const THEME_KEY = "preferred-theme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(THEME_KEY) || "system"
  );

  useEffect(() => {

    const body = document.body;
    /* const root = document.documentElement; */

    if (theme === "system") {
      body.classList.remove("light", "dark");
    } else if (theme === "dark") {
      body.classList.add("dark");
      body.classList.remove("light");
    } else if (theme === "light") {
      body.classList.add("light");
      body.classList.remove("dark");
    }

    /* console.log(`Applied ${theme} theme`); */

    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
