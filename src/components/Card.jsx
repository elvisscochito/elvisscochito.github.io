import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo, faCircleXmark, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import PropTypes from 'prop-types'; */
import { useState } from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ brand, project, role, date, thumbnail, logo, description, skills, /* link, */ preview, repo }) => {
  const [isFrontCard, setIsFrontCard] = useState(true);

  const handleCardClick = () => {
    // Prevent any visible tooltip from getting stuck when we flip the card.
    // Add a body class that hides the global Tooltip for the duration of the flip animation.
    try {
      document?.body?.classList.add('tooltip-hidden');
      // clean up after the flip transition (0.7s in CSS). Give a little buffer.
      window.setTimeout(() => document?.body?.classList.remove('tooltip-hidden'), 800);
    } catch (e) {
      // ignore in non-browser environments
    }

    setIsFrontCard(!isFrontCard);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.cardInner} ${!isFrontCard ? styles.flipped : ''}`}>

        {/* FRONT SIDE */}
        <div className={`${styles.cardFace} ${styles.frontCard}`}>
          <header className={styles.headerIcons}>
            {
              role && (
                <div className={styles.leftContainer}>
                  {/* <Tooltip text="Role Information"> */}
                  <span className={styles.role} data-tooltip-id="global-tooltip" data-tooltip-content={role}>| {role}</span>
                  {/* </Tooltip> */}
                </div>
              )
            }
            <div className={styles.middleContainer}>
              <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.rightContainer}>
              {/*  <Tooltip text="React, CSS"> */}
              <button className={styles.iconBtn} aria-label="Technologies Used" /* title="React, CSS" */ data-tooltip-id="global-tooltip" data-tooltip-content={`Skills/Stack: ${(skills || []).join(', ')}`}>
                <FontAwesomeIcon icon={faCode} className={styles.codeIcon} />
              </button>
              {/* </Tooltip> */}
              {/* <Tooltip text="View Source Code on GitHub Repository"> */}
              <a href={repo} target='_blank' rel='noopener noreferrer' className={styles.link} /* title="View Source Code on GitHub Repository" */ data-tooltip-id="global-tooltip" data-tooltip-content="View Source Code on GitHub Repository">
                <FontAwesomeIcon icon={faGithub} className={styles.gitHubIcon} />
              </a>
              {/*  </Tooltip> */}
              {/* <Tooltip text="View Project Description Information"> */}
              <button className={styles.iconBtn} aria-label="Info" /* title="View Project Description Information" */ data-tooltip-id="global-tooltip" data-tooltip-content="View Project Description Information" onClick={handleCardClick}>
                <FontAwesomeIcon icon={faCircleInfo} className={styles.infoDescriptionIcon} />
              </button>
              {/* </Tooltip> */}
            </div>
          </header>

          <figure className={styles.body}>
            <img src={thumbnail} alt="Project 1" />
            <a href={preview} target='_blank' rel='noopener noreferrer' className={styles.linkImage}><img src={logo} alt="Brand Logo" className={styles.brandLogo} /></a>
            <figcaption className={styles.figcaption}>&quot;{project}&quot; {/* <span> */}{/* - */}• {/* | */} {brand}{/* </span> */}</figcaption>
          </figure>

          <footer className={styles.footer}>
            <a href={preview} target='_blank' rel='noopener noreferrer'>Preview Project &#8599;</a>
          </footer>
        </div>

        {/* BACK SIDE */}
        <div className={`${styles.cardFace} ${styles.backCard}`}>
          <header className={styles.headerBackIcons}>
            {/* <div className={styles.rightContainer}> */}
            <button className={styles.iconBtn} aria-label="Close Description" /* title="View Project Description Information" */ data-tooltip-id="global-tooltip" data-tooltip-content="Close Project Description Information" onClick={handleCardClick}>
              <FontAwesomeIcon icon={faCircleXmark} className={styles.infoDescriptionIcon} />
            </button>
            {/* </Tooltip> */}
            {/* </div> */}
          </header>

          <figure className={styles.bodyBack}>
            <img src={thumbnail} alt="Project 1" />
            <figcaption className={styles.description}>{description}</figcaption>
          </figure>

          <footer className={styles.footer}>
            <a href={preview} target='_blank' rel='noopener noreferrer'>Preview Project &#8599;</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

/* Card.propTypes = {
        title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
      brand: PropTypes.string,
      link: PropTypes.string,
      repo: PropTypes.string,
}; */

export default Card;
