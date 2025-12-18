/* import me from '../assets/me.jpg'; */
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/SocialProof.module.css';

const SocialProofCard = ({ name, position, comment, profile, linkedin, link, type, tooltipText }) => {
  return (
    <div className={styles.socialProofCard}>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.link} data-tooltip-id="global-tooltip" data-tooltip-content={tooltipText}>
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
      <img src={profile} alt="Social Proof" className={styles.profilePicture} />
      <p className={styles.proofComment}>&quot;{comment}&quot;</p>
      <h3 className={styles.fullName}>{name}</h3>
      <span className={styles.position}>{position}</span>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkBottom}>View Full {type} on LinkedIn &#8599;</a>
    </div>
  );
};

export default SocialProofCard;
