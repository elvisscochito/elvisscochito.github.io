import styles from '../styles/ActivitiesAndSocieties.module.css';
const ActivitiesAndSocietiesCard = ({ name, description, logo, link }) => {
  return (
    <>
      <img src={logo} alt={`${name} logo`} className={styles.activityLogo} />
      <h3 className={styles.activityName}>{name}</h3>
      <p className={styles.activityDescription}>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.learnMoreLink}>Learn More &#8599;</a>
    </>
  );
};

export default ActivitiesAndSocietiesCard;
