import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from '../styles/HonorsAndAwards.module.css';

const HonorsAndAwardsCard = ({ title, description, images, linkedin, date, location }) => {
  const { t } = useTranslation("global");

  return (
    <>
      <header className={styles.cardHeader}>
        <h4 className={styles.awardTitle}>{t("HonorsAndAwards.gallery")}</h4>
        {
          linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.link} data-tooltip-id="global-tooltip" data-tooltip-content="View LinkedIn Post &#8599;">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
          )
        }
      </header>

      <div className={styles.imagesContainer}>
        {
          images.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`${title} Badge ${index + 1}`} className={styles.image} />
          ))
        }
      </div>

      <span className={styles.awardDate}><FontAwesomeIcon icon={faCalendar} className={styles.icon} />{date}</span>
      <span className={styles.awardLocation}><FontAwesomeIcon icon={faLocationDot} className={styles.icon} />{location}</span>
      <h3 className={styles.awardTitle}>{title}</h3>
      <p className={styles.awardDescription}>{description}</p>
    </>
  );
};

export default HonorsAndAwardsCard;
