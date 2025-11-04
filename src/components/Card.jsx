import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import PropTypes from 'prop-types'; */
import styles from '../styles/Card.module.css';
import Tooltip from './Tooltip';

const Card = ({ brand, project, role, date, thumbnail, logo, /* link, */ preview, repo }) => {
  return (
    <div className={styles.card}>
      <header className={styles.headerIcons}>
        {
          role && (
            <div className={styles.leftContainer}>
              {/* <Tooltip text="Role Information"> */}
              <span className={styles.role}>| {role}</span>
              {/* </Tooltip> */}
            </div>
          )
        }
        <div className={styles.middleContainer}>
          <span className={styles.date}>{date}</span>
        </div>
        <div className={styles.rightContainer}>
          <Tooltip text="React, CSS">
            <FontAwesomeIcon icon={faCode} className={styles.codeIcon} />
          </Tooltip>
          <Tooltip text="View Source Code on GitHub Repository">
            <a href={repo} target='_blank' rel='noreferrer' className={styles.link}>
              <FontAwesomeIcon icon={faGithub} className={styles.gitHubIcon} />
            </a>
          </Tooltip>
          <Tooltip text="View Project Description Information">
            <FontAwesomeIcon icon={faCircleInfo} className={styles.infoDescriptionIcon} />
          </Tooltip>
        </div>
      </header>
      <figure className={styles.body}>
        <img src={thumbnail} alt="Project 1" />
        <img src={logo} alt="Brand Logo" className={styles.brandLogo} />
        <figcaption className={styles.figcaption}>&quot;{project}&quot; {/* <span> */}{/* - */}• {/* | */} {brand}{/* </span> */}</figcaption>
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
