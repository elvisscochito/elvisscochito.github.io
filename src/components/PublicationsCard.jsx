/* import { faBuilding, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import { useTranslation } from 'react-i18next';
import medium from '../assets/medium.svg';
import me from '../assets/profile.webp';
import styles from '../styles/Publications.module.css';

const PublicationsCard = ({ title, publisher, author, date, readTime, link }) => {
  const { t } = useTranslation("global");

  return (
    <>
      <h3 className={styles.publicationTitle}>{title}</h3>

      <span className={styles.publicationPublisher}>
        {/* <FontAwesomeIcon icon={faBuilding} className={styles.icon} /> */} {t("Publications.published")} {publisher}<img src={medium} alt="Medium Logo" className={styles.image} />
      </span>

      <span className={styles.publicationAuthor}>
        {/* <FontAwesomeIcon icon={faUser} className={styles.icon} /> */} {t("Publications.by")} {author}<img src={me} alt="Author Profile" className={styles.image} />
      </span>

      <span className={styles.publicationDate}>{/* <FontAwesomeIcon icon={faCalendar} className={styles.icon} /> */}{date}</span>
      {/* <p className={styles.publicationDetails}>{publications.details}</p> */}
      <span className={styles.readTime}>{readTime}</span>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>{t("Publications.btn")} &#8599;</a>
    </>
  );
};

export default PublicationsCard;
