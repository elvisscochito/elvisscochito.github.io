import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const AppearanceDropdown = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  /* const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(`Switched to ${theme === "light" ? "dark" : "light"} mode`);
  }; */

  return (
    <>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </>
  );
};

export default AppearanceDropdown;
