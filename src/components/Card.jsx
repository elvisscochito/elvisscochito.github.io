import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import PropTypes from 'prop-types'; */
import styles from '../styles/Card.module.css';

const Card = ({ title, date, thumbnail, brand, /* link, */ preview, repo }) => {
  return (
    <div className={styles.card}>
      <header className={styles.headerIcons}>
        <div className={styles.leftContainer}>
          <FontAwesomeIcon icon={faCircleInfo} className={styles.infoDescriptionIcon} />
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.rightContainer}>
          <FontAwesomeIcon icon={faCode} className={styles.codeIcon} />
          <a href={repo} target='_blank' rel='noreferrer' className={styles.link}>
            <FontAwesomeIcon icon={faGithub} className={styles.gitHubIcon} />
          </a>
        </div>
      </header>
      <figure className={styles.body}>
        <img src={thumbnail} alt="Project 1" />
        <img src={brand} alt="Brand Logo" className={styles.brandLogo} />
        <figcaption>{title}</figcaption>
      </figure>
      <footer className={styles.footer}>
        <a href={preview} target='_blank'>Preview&#8599;</a>
      </footer>
    </div>
  );
}

/* Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  brand: PropTypes.string,
  link: PropTypes.string,
  repo: PropTypes.string,
}; */

export default Card;
