import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ToggleLanguage.module.css';

const ToggleLanguage = () => {
  const { i18n } = useTranslation(/* "global" */);
  const [language, setLanguage] = useState(i18n.language || 'en');

  const handleToggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <button
      className={styles.toggleButton}
      onClick={handleToggleLanguage}
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default ToggleLanguage;
