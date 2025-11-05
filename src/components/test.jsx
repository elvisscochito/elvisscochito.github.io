import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo, faCircleXmark, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ brand, project, role, date, thumbnail, logo, description, preview, repo }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.cardInner} ${flipped ? styles.flipped : ''}`}>

        {/* FRONT SIDE */}
        <div className={`${styles.cardFace} ${styles.frontCard}`}>
          <header className={styles.headerIcons}>
            <div className={styles.leftContainer}>
              {role && <span className={styles.role}>| {role}</span>}
            </div>
            <div className={styles.middleContainer}>
              {date && <span className={styles.date}>{date}</span>}
            </div>
            <div className={styles.rightContainer}>
              <button className={styles.iconBtn}>
                <FontAwesomeIcon icon={faCode} />
              </button>
              {repo && (
                <a href={repo} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
              <button
                className={styles.iconBtn}
                onClick={() => setFlipped(true)}
                aria-label="Show description"
              >
                <FontAwesomeIcon icon={faCircleInfo} />
              </button>
            </div>
          </header>

          <figure className={styles.body}>
            <img src={thumbnail} alt={project} />
            {logo && (
              <a
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkImage}
              >
                <img src={logo} alt={`${brand} logo`} className={styles.brandLogo} />
              </a>
            )}
            <figcaption className={styles.figcaption}>
              “{project}” • {brand}
            </figcaption>
          </figure>

          <footer className={styles.footer}>
            {preview && (
              <a href={preview} target="_blank" rel="noopener noreferrer">
                Preview Project ↗
              </a>
            )}
          </footer>
        </div>

        {/* BACK SIDE */}
        <div className={`${styles.cardFace} ${styles.backCard}`}>
          <header className={styles.headerBack}>
            <button
              className={styles.iconBtn}
              onClick={() => setFlipped(false)}
              aria-label="Close description"
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </header>

          <figure className={styles.bodyBack}>
            <img src={thumbnail} alt={project} />
            <figcaption className={styles.description}>
              {description || 'No description provided.'}
            </figcaption>
          </figure>

          <footer className={styles.footer}>
            {preview && (
              <a href={preview} target="_blank" rel="noopener noreferrer">
                Preview Project ↗
              </a>
            )}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Card;
