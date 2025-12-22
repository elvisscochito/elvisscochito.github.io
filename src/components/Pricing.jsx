import styles from '../styles/Pricing.module.css';
const Pricing = () => {
  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.heading}>Pricing</h2>
        <p className={styles.subheading}>
          Choose the plan that best fits your needs and budget. Whether you're an individual or a business, we have options for everyone.
        </p>
      </header>
      <ul className={styles.pricingList}>
        <li className={styles.pricingItem}>
          <h3 className={styles.planName}>Basic</h3>
          <p className={styles.planPrice}>$9.99/month</p>
          <ul className={styles.featuresList}>
            <li>Feature A</li>
            <li>Feature B</li>
            <li>Feature C</li>
          </ul>
          <button className={styles.selectButton}>Select Plan</button>
        </li>
        <li className={styles.pricingItem}>
          <h3 className={styles.planName}>Pro</h3>
          <p className={styles.planPrice}>$29.99/month</p>
          <ul className={styles.featuresList}>
            <li>Everything in Basic</li>
            <li>Feature D</li>
            <li>Feature E</li>
          </ul>
          <button className={styles.selectButton}>Select Plan</button>
        </li>
        <li className={styles.pricingItem}>
          <h3 className={styles.planName}>Enterprise</h3>
          <p className={styles.planPrice}>Contact us for pricing</p>
          <ul className={styles.featuresList}>
            <li>Everything in Pro</li>
            <li>Custom Solutions</li>
            <li>Dedicated Support</li>
          </ul>
          <button className={styles.selectButton}>Contact Sales</button>
        </li>
      </ul>
    </div>
  );
};

export default Pricing;
