import { faGear, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from "react";
import '../styles/AppearanceDropdown.css';
import ThemeContext from "./ThemeContext";

const options = [
  { key: "light", label: "Light"/* "Light Mode" */, icon: faSun/* "☀️" */ },
  { key: "dark", label: "Dark"/* "Dark Mode" */, icon: faMoon/* "🌙" */ },
  { key: "system", label: "System"/* "System Default" */, icon: faGear/* "🖥" */ },
];

const AppearanceDropdown = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e) => {
    setTheme(e.target.value);
    /* console.log(`Switched to ${e.target.value} mode`); */
  };

  return (
    <>
      {/* <label htmlFor="appearance-select" className="sr-only">Select Appearance Mode</label> */}
      <select id="appearance-select" value={theme} onChange={handleChange} aria-label="Select Appearance Mode">

        <button className="appearance-dropdown-button" aria-haspopup="listbox" aria-expanded="false">
          {/* <FontAwesomeIcon icon={faGear} /> */}
          {/* ⚙️ */}
          <selectedcontent>{/* ⚙️ */}</selectedcontent>
        </button>

        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {/* {option.icon} */}{/*  {option.label} */}
            <FontAwesomeIcon icon={option.icon} className="icon" />
            <span className="appearance-label">{option.label}</span>
          </option>
        ))}
      </select>
    </>
  );
};

export default AppearanceDropdown;
