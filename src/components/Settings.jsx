import { faCircleHalfStroke, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Settings.module.css';
import AppearanceDropdown from './AppearanceDropdown';
/* import SearchInput from "./SearchInput"; */
import ToggleLanguage from "./ToggleLanguage";

const Settings = () => {
  const { t } = useTranslation("global");

  /* const isMac = navigator.platform.includes("Mac");
  const shortcut = isMac ? "⌃⌥K" : "Alt+K"; */
  return (
    <>
      <h1>{t("Settings.heading")}</h1>
      {/* <p className={styles.instructionsText}>Use the following keyboard shortcuts to navigate and interact with the settings:</p>
      <ul className={styles.instructionsList}>
        <li className={styles.instructionItem}>Use the arrow keys <kbd>↑</kbd> <kbd>↓</kbd> to navigate through the settings options.</li>
        <li className={styles.instructionItem}>Press <kbd>Enter</kbd> to select an option.</li>
        <li className={styles.instructionItem}>Press <kbd>Esc</kbd> to close the settings menu.</li>
        <li className={styles.instructionItem}>Press <kbd>{shortcut}</kbd> to open the settings menu.</li>
      </ul> */}
      <ul className={styles.settingsList}>
        {/* <li className={styles.settingItem}>
          <label htmlFor="search-input" className={styles.settingLabel}>Search:</label>
          <SearchInput />
        </li> */}
        <li className={styles.settingItem}>
          <label htmlFor="language-button" className={styles.settingLabel}>
            <FontAwesomeIcon icon={faLanguage} />&nbsp;{t("Settings.ToggleLanguage.language")}
          </label>
          <ToggleLanguage />
        </li>
        <li className={styles.settingItem}>
          <label htmlFor="appearance-select" className={styles.settingLabel}/*  sr-only */>
            <FontAwesomeIcon icon={faCircleHalfStroke} />&nbsp;{t("Settings.AppearanceDropdown.appearance")}
          </label>
          <AppearanceDropdown />
        </li>

        {/* <li className={styles.settingItem}>
          <label htmlFor="appearance-select" className={styles.settingLabel}>
            <FontAwesomeIcon icon={faCookie} />&nbsp;Cookies:
          </label>
        </li> */}
      </ul>
    </>
  );
};

export default Settings;
