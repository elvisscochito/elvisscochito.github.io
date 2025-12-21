import styles from '../styles/Settings.module.css';
import AppearanceDropdown from './AppearanceDropdown';
import SearchInput from "./SearchInput";
import ToggleLanguage from "./ToggleLanguage";

const Settings = () => {
  return (
    <>
      <h1>Settings Command Palette</h1>
      <div className={styles.settingItem}>
        <label htmlFor="search-input" className={styles.settingLabel}>Search:</label>
        <SearchInput />
      </div>
      <div className={styles.settingItem}>
        <label htmlFor="language-select" className={styles.settingLabel}>Language:</label>
        <ToggleLanguage />
      </div>
      <div className={styles.settingItem}>
        <label htmlFor="appearance-select" className={styles.settingLabel}>Appearance:</label>
        <AppearanceDropdown />
      </div>
    </>
  );
};

export default Settings;
