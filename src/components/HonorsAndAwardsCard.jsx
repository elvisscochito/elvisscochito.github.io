import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/HonorsAndAwards.module.css';

const HonorsAndAwardsCard = ({ title, description, image, linkedin }) => {
  return (
    <>
      {
        linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.link} data-tooltip-id="global-tooltip" data-tooltip-content="View LinkedIn Post">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
        )
      }
      <img src={image} alt={`${title} Badge`} className={styles.image} />
      <h3 className={styles.awardTitle}>{title}</h3>
      <p className={styles.awardDescription}>{description}</p>
    </>
  );
};

export default HonorsAndAwardsCard;
