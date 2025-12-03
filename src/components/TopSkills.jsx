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
        <li>HTML5</li>
        •
        <li>CSS</li>
        {/* •
        <li>JavaScript</li> */}
        •
        <li>React.js</li>
        •
        <li>Node.js</li>
        •
        <li>Express.js</li>
        •
        <li>Git & GitHub</li>
        •
        <li>Python</li>
      </ul>
    </div>
  );
};

export default TopSkills;
