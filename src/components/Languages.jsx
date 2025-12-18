/* import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import { useTranslation } from 'react-i18next';
import mexico from '../assets/mexicoflag.svg';
import usa from '../assets/usaflag.svg';
import styles from '../styles/Languages.module.css';

const Languages = () => {
  const { t } = useTranslation("global");
  return (
    <section id='languages' className={styles.languagesSection}>
      <header className={styles.header}>
        <h2 className={styles.languagesHeading}>{t("Languages.heading")}{/* <FontAwesomeIcon icon={faLanguage} className={styles.icon} /> */}</h2>
        <span>{t("Languages.subheading")}</span>
      </header>
      <ul className={styles.languagesList}>
        <li>
          <img src={mexico} alt="Mexico Flag" className={styles.flag} />
          <h3 className={styles.languageName}>{t("Languages.languagesList.l1.name")}</h3>
          <span className={styles.proficiency}>{t("Languages.languagesList.l1.proficiency")}</span>
        </li>
        <li>
          <img src={usa} alt="USA Flag" className={styles.flag} />
          <h3 className={styles.languageName}>{t("Languages.languagesList.l2.name")}</h3>
          <span className={styles.proficiency}>{t("Languages.languagesList.l2.proficiency")}</span>
        </li>
      </ul>
    </section>
  );
};

export default Languages;
