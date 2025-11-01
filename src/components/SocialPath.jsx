import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/SocialPath.module.css';

const Social = () => {
  return (
    <div className={styles.container}>
      {/* <h2>@</h2> */}
      <a href="https://www.linkedin.com/in/elviro-dominguez-soriano" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
      <a href="https://github.com/elvisscochito" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
      <a href="https://wa.me/527773464786?text=Hey,%20I'm%20contacting%20for%20opportunity" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
      </a>
      <a href="mailto:contact@elvirodominguez.com?subject=Contacting%20for%20opportunity&body=Hello,%20Elviro:" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </a>
    </div>
  );
}

export default Social;
