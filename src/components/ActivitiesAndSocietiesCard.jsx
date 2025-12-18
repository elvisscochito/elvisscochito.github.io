import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ActivitiesAndSocieties.module.css';

const ActivitiesAndSocietiesCard = ({ name, role, duration, description, logo, link }) => {
  const { t } = useTranslation("global");

  return (
    <>
      <img src={logo} alt={`${name} logo`} className={styles.activityLogo} />
      <h3 className={styles.activityName}>{name}</h3>
      <p className={styles.activityDescription}>{description}</p>
      <p className={styles.activityRoleDuration}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} /> {role} | <FontAwesomeIcon icon={faCalendar} className={styles.icon} /> {duration}
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.learnMoreLink}>{t("ActivitiesAndSocieties.btn")}</a>
    </>
  );
};

export default ActivitiesAndSocietiesCard;
