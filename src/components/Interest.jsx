import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Services.module.css';

const Interest = () => {
  return (
    <div id="interest" className={styles.interestContainer}>
      <header className={styles.header}>
        <h3 className={styles.topSkillsHeading}><FontAwesomeIcon icon={faStar} className={styles.icon} /> Interest</h3>
      </header>
      <ul className={styles.interestList}>
        <li className={styles.interestItem}>
          Web Development (Frontend, Backend or Fullstack)
        </li>
        •
        <li className={styles.interestItem}>
          Data Science (Machine Learning, AI, Big Data) & Business Analytics
        </li>
        •
        <li className={styles.interestItem}>
          Mobile (Android, iOS or Hybrid) Applications Development
        </li>
        •
        <li className={styles.interestItem}>
          Networking & Cybersecurity
        </li>
        •
        <li className={styles.interestItem}>
          DevOps & Cloud Computing
        </li>
        <li className={styles.interestItem}>
          IT Consulting & Technical Support
        </li>
      </ul>
    </div>
  );
};

export default Interest;
