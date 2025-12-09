import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/ActivitiesAndSocieties.module.css';

const ActivitiesAndSocietiesCard = ({ name, role, duration, description, logo, link }) => {
  return (
    <>
      <img src={logo} alt={`${name} logo`} className={styles.activityLogo} />
      <h3 className={styles.activityName}>{name}</h3>
      <p className={styles.activityDescription}>{description}</p>
      <p className={styles.activityRoleDuration}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} /> {role} | <FontAwesomeIcon icon={faCalendar} className={styles.icon} /> {duration}
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.learnMoreLink}>Learn More &#8599;</a>
    </>
  );
};

export default ActivitiesAndSocietiesCard;
