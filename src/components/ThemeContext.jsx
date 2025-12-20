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

/* document.body.className = theme;

const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  console.log(`Switched to ${theme === "light" ? "dark" : "light"} mode`);
};

useEffect(() => {
  document.body.className = theme;
  localStorage.setItem(THEME_KEY, theme);

  const root = document.documentElement;

  if (theme === "system") {
const media = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (media) {
  root.classList.add("dark");
  root.classList.remove("light");
} else {
  root.classList.add("light");
  root.classList.remove("dark");
}

root.classList.remove("light", "dark");
} else if (theme === "dark") {
root.classList.add("dark");
root.classList.remove("light");
} else if (theme === "light") {
root.classList.add("light");
root.classList.remove("dark");
}

localStorage.setItem(THEME_KEY, theme);

const root = document.documentElement;
const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (theme === "dark" || (theme === "system" && isSystemDark)) {
  root.classList.add("dark");
  root.classList.remove("light");
} else {
  root.classList.add("light");
  root.classList.remove("dark");
}

const root = document.documentElement;
const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const appliedTheme =
  theme === "system" ? (isSystemDark ? "dark" : "light") : theme;

root.classList.remove("light", "dark");
root.classList.add(appliedTheme);

localStorage.setItem(THEME_KEY, theme);

if (theme === "system") {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
}
}, [theme]); */
