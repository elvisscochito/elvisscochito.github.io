/* import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import mexico from '../assets/mexicoflag.svg';
import usa from '../assets/usaflag.webp';
import styles from '../styles/Languages.module.css';

const Languages = () => {
  return (
    <section className={styles.languagesSection}>
      <header className={styles.header}>
        <h2 className={styles.languagesHeading}>Languages{/* <FontAwesomeIcon icon={faLanguage} className={styles.icon} /> */}</h2>
        <span>Here are the languages I speak and my proficiency levels.</span>
      </header>
      <ul className={styles.languagesList}>
        <li>
          <img src={mexico} alt="Mexico Flag" className={styles.flag} />
          <h3 className={styles.languageName}>Spanish</h3>
          <span className={styles.proficiency}>Native Proficiency</span>
        </li>
        <li>
          <img src={usa} alt="USA Flag" className={styles.flag} />
          <h3 className={styles.languageName}>English</h3>
          <span className={styles.proficiency}>B2 Intermediate</span>
        </li>
      </ul>
    </section>
  );
};

export default Languages;
