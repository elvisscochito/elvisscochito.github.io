import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Services.module.css';

const Services = () => {
  const { t } = useTranslation("global");
  return (
    <div id="services" className={styles.servicesContainer}>
      <header className={styles.header}>
        <h3 className={styles.topSkillsHeading}><FontAwesomeIcon icon={faStar} className={styles.icon} /> {t("Services.heading")}</h3>
      </header>
      {/* <p>Details about services will go here.</p> */}
      <ul className={styles.serviceList}>
        <li className={styles.serviceItem}>
          {t("Services.WebDevelopment")}
          {/* <h4 className={styles.serviceTitle}>Web Development</h4>
          <p className={styles.serviceDescription}>Building responsive and dynamic websites using modern technologies like React, Node.js, and more.</p> */}
        </li>
        <li className={styles.serviceItem}>
          {t("Services.SoftwareDevelopment")}
          {/* <h4 className={styles.serviceTitle}>Web Development</h4>
          <p className={styles.serviceDescription}>Building responsive and dynamic websites using modern technologies like React, Node.js, and more.</p> */}
        </li>
        <li className={styles.serviceItem}>
          {t("Services.BusinessAnalytics")}
        </li>
        <li className={styles.serviceItem}>
          {t("Services.GraphicDesign")}
          {/* <h4 className={styles.serviceTitle}>UI/UX Design</h4>
          <p className={styles.serviceDescription}>Designing intuitive user interfaces and engaging user experiences for web and mobile applications.</p> */}
        </li>
        {/* <li className={styles.serviceItem}>
          Mobile Application Development */}
        {/* <h4 className={styles.serviceTitle}> App Development</h4>
          <p className={styles.serviceDescription}>Creating user-friendly mobile applications for both Android and iOS platforms.</p> */}
        {/* </li> */}
        <li className={styles.serviceItem}>
          {t("Services.DigitalMarketing")}
          {/*  <h4 className={styles.serviceTitle}>Backend Development</h4>
          <p className={styles.serviceDescription}>Creating robust backend systems with Express.js, databases, and RESTful APIs.</p> */}
        </li>
        {/* <li className={styles.serviceItem}>
          <h4 className={styles.serviceTitle}>Consulting</h4>
          <p className={styles.serviceDescription}>Providing expert advice on web technologies, architecture, and best practices.</p>
        </li> */}
      </ul>
    </div>
  );
};

export default Services;
