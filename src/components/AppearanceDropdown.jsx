import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const options = {
  light: "Light Mode",
  dark: "Dark Mode",
  system: "System Default",
}

const AppearanceDropdown = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  /* const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(`Switched to ${theme === "light" ? "dark" : "light"} mode`);
  }; */

  const handleChange = (e) => {
    setTheme(e.target.value);
    /* console.log(`Switched to ${e.target.value} mode`); */
  };

  /* const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  } */

  return (
    <>
      <select value={theme} onChange={handleChange} aria-label="Select Appearance Mode">
        {Object.entries(options).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

export default AppearanceDropdown;
