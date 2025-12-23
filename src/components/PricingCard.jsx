import { faArrowDown, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Pricing.module.css';

const PricingCard = ({ cardKey, icon, tag, title, price, frequency, features }) => {
  const { t } = useTranslation("global");
  return (
    <>
      <span className={styles.tag}><FontAwesomeIcon icon={icon} className={styles.icon} /> {tag}</span>
      {/* <figure className={styles.figure}>
        <img src="https://via.placeholder.com/150" alt="Basic Plan" className={styles.image} />
        <figcaption className={styles.figcaption}>Basic Plan</figcaption>
      </figure> */}
      <h3 className={styles.planName}>{title}</h3>
      <p className={styles.planPrice}>
        {
          cardKey === 4
            ? t('Pricing.contactForQuote')
            : t('Pricing.startedFrom')
        }
        <span className={styles.currency}> {price}</span>
        {/* {
          cardKey !== 4 &&
          <span className={styles.frequency}>&nbsp;| ({frequency})</span>
        } */}
      </p>
      {/* <span className={styles.tagline}>Perfect for individuals and small businesses looking to establish an online presence.</span> */}
      <ul className={styles.featuresList}>
        {
          features.map((feature, index) => (
            <li key={index}><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> {feature}</li>
          ))
        }
        {/* <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Develop with Built-in technologies  or modern Vanilla, Libraries or Frameworks</li> */}
      </ul>
      <a href='#contact' className={styles.linkButton}>{t('Pricing.btn')} <FontAwesomeIcon icon={faArrowDown} className={styles.icon} /></a>
    </>
  );
};

export default PricingCard;
