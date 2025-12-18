import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/WorkExperience.module.css';

const WorkExperienceCard = ({ title, website, company, type, positionLink, date, duration, location, locationType, responsibilities = [], logo }) => {
  return (
    <div className={styles.experience}>
      <a href={website} target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
        <img src={logo} alt={`${company} logo`} className={styles.logo} />
      </a>
      <h3 className={styles.company}>
        <a href={website} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
          {company}
          &nbsp;
          {/* <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          &nbsp; */}
          &#8599;
        </a>
      </h3>
      {/* <header className={styles.header}>
        <img src={logo} alt={`${company} logo`} className={styles.logoHeader} />
        <h3 className={styles.companyHeader}>{company}</h3>
      </header> */}
      <h4 className={styles.title}>
        <a href={positionLink} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
          {title}
          &nbsp;
          {/* <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          &nbsp; */}
          &#8599;
          {/* ↗ */}
        </a>
      </h4>
      <span className={styles.type}>{type}</span>
      <p className={styles.dateAndDuration}>
        <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
        <span className={styles.date}>{date}</span>
        •
        <span className={styles.duration}>&#40;{duration}&#41;</span>
      </p>

      <p className={styles.locationInfo}>
        <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
        <span className={styles.location}>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location + ', ' + company)}`} target="_blank" rel="noopener noreferrer" className={styles.locationLink}>
            {location}
            &nbsp;
            &#8599;
          </a>
        </span>
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
      <a href="https://www.linkedin.com/in/elviro-dominguez-soriano/details/experience/" target="_blank" rel="noopener noreferrer" className={styles.viewMoreLink}>
        View More on LinkedIn
        &nbsp;
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        &nbsp;
        &#8599;
      </a>
    </div>
  );
};

export default WorkExperienceCard;
