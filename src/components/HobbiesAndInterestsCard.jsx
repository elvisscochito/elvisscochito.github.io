import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/HobbiesAndInterests.module.css';

const HobbiesAndInterestsCard = ({ name, description, icon, link, platformName, platformIcon }) => {
  return (
    <>
      <h3 className={styles.hobbyName}><FontAwesomeIcon icon={icon} className={styles.icon} />{name}</h3>
      <p className={styles.hobbyDescription}>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.hobbyLink}><FontAwesomeIcon icon={platformIcon} className={styles.icon} /> {platformName} &#8599;</a>
    </>
  );
};

export default HobbiesAndInterestsCard;
