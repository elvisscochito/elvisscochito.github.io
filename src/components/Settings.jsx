import { faCircleHalfStroke, faLanguage, faMagnifyingGlass, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import styles from '../styles/Settings.module.css';
import AppearanceDropdown from './AppearanceDropdown';
import SearchInput from "./SearchInput";
import ToggleCurrency from './ToggleCurrency';
import ToggleLanguage from "./ToggleLanguage";

const Settings = ({ onClose }) => {
  const { t } = useTranslation("global");
  const location = useLocation();
  const isLinkInBioPage = location.pathname.startsWith('/link-in-bio')/* useLocation().pathname === '/link-in-bio' */;

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
        {
          !isLinkInBioPage && (
            <li className={styles.settingItem}>
              <label htmlFor="search-input" className={styles.settingLabel}><FontAwesomeIcon icon={faMagnifyingGlass} />&nbsp;Search:</label>
              <SearchInput onSelect={onClose} />
            </li>
          )
        }
        <li className={styles.settingItem}>
          <label htmlFor="language-button" className={styles.settingLabel}>
            <FontAwesomeIcon icon={faLanguage} />&nbsp;{t("Settings.ToggleLanguage.language")}
          </label>
          <ToggleLanguage />
        </li>
        {
          !isLinkInBioPage && (
            <li className={styles.settingItem}>
              <label htmlFor="currency-toggle" className={styles.settingLabel}>
                <FontAwesomeIcon icon={faMoneyBill} />&nbsp;{t("Settings.ToggleCurrency.currency")}
              </label>
              <ToggleCurrency />
            </li>
          )
        }
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
