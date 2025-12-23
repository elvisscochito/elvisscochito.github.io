import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ToggleLanguage.module.css';

/* const LANGUAGE_KEY = 'language'; */

const ToggleLanguage = () => {
  const { t, i18n } = useTranslation("global");
  const [language, setLanguage] = useState(i18n.language || 'en');

  const handleToggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <button
      id='language-button'
      className={styles.toggleButton}
      onClick={handleToggleLanguage}
      aria-label="Toggle Language"
    >
      {language === 'en' ? (
        <>
          {t("Settings.ToggleLanguage.spanish")}
          &nbsp;
          <abbr title="Cambiar a Español">&#40;ES&#41;</abbr>
        </>
      ) : (
        <>
          {t("Settings.ToggleLanguage.english")}
          &nbsp;
          <abbr title="Switch to English">&#40;EN&#41;</abbr>
        </>
      )}
    </button>
  );
};

export default ToggleLanguage;
