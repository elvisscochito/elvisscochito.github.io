import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from '../styles/TopSkills.module.css';

const TopSkills = () => {
  const { t } = useTranslation("global");
  return (
    <div className={styles.topSkillsContainer}>
      <header className={styles.header}>
        <h3 className={styles.topSkillsHeading}><FontAwesomeIcon icon={faCode} className={styles.icon} /> {t("TopSkills.heading")}</h3>
      </header>
      <ul className={styles.skillsList}>
        <li className={styles.skillItem}>Front-End</li>
        <li className={styles.skillItem}>HTML5</li>
        <li className={styles.skillItem}>CSS</li>
        {/* <li>JavaScript</li> */}
        <li className={styles.skillItem}>React.js</li>
        <li className={styles.skillItem}>Node.js</li>
        <li className={styles.skillItem}>Express.js</li>
        <li className={styles.skillItem}>Git & GitHub</li>
        <li className={styles.skillItem}>Python</li>
        <li className={styles.skillItem}>Problem Solving</li>
      </ul>
    </div>
  );
};

export default TopSkills;
