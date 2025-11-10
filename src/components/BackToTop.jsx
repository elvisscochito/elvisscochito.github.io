import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/BackToTop.module.css';

const BackToTop = () => {
  /* const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; */

  {/* <button className={styles.backToTop} onClick={handleClick} aria-label="Back to top">
    ↑
  </button> */}
  return (
    <a href="#home" className={styles.backToTop} aria-label="Back to top" /* data-tooltip-id="global-tooltip" data-tooltip-content="Back to Top" */>
      <FontAwesomeIcon icon={faArrowUp} className={styles.icon} />
      {/* Back to Top */}
    </a>
  );
}

export default BackToTop;
