import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/WorkExperience.module.css';

const WorkExperienceCard = ({ title, company, type, date, duration, location, locationType, responsibilities = [], logo }) => {
  return (
    <div className={styles.experience}>
      <img src={logo} alt={`${company} logo`} className={styles.logo} />
      <h3 className={styles.company}>{company}</h3>
      {/* <header className={styles.header}>
        <img src={logo} alt={`${company} logo`} className={styles.logoHeader} />
        <h3 className={styles.companyHeader}>{company}</h3>
      </header> */}
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.type}>{type}</span>
      <p className={styles.dateAndDuration}>
        <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
        <span className={styles.date}>{date}</span>
        •
        <span className={styles.duration}>&#40;{duration}&#41;</span>
      </p>

      <p className={styles.locationInfo}>
        <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
        <span className={styles.location}>{location}</span>
        •
        <span className={styles.locationType}>{locationType}</span>
      </p>
      <ul>
        {
          responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default WorkExperienceCard;
