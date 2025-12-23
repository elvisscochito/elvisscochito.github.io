import { faArrowDown, faCircleCheck, faCode, faDashboard, faGlobe, faInfoCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Pricing.module.css';
const Pricing = () => {
  return (
    <section id='pricing' className={styles.pricingSection}>
      <header className={styles.header}>
        <h2 className={styles.heading}>Pricing</h2>
        <span className={styles.subheading}>
          {/* Choose the offer that best fits your needs and budget. Whether you're an individual or a business, I have options for everyone.  */}I offer this popular options{/* listenings */}, in an affordable and flexible pricing, tailored to your specific needs, budget and goals.
        </span>
      </header>
      <ul className={styles.pricingList}>
        <li className={styles.pricingItem}>
          <span className={styles.tag}><FontAwesomeIcon icon={faGlobe} className={styles.icon} /> Web Development</span>
          {/* <figure className={styles.figure}>
            <img src="https://via.placeholder.com/150" alt="Basic Plan" className={styles.image} />
            <figcaption className={styles.figcaption}>Basic Plan</figcaption>
          </figure> */}
          <h3 className={styles.planName}>Landing Page</h3>
          <p className={styles.planPrice}>Started From <span className={styles.currency}>&#36;525.92 USD</span></p>
          {/* <span className={styles.tagline}>Perfect for individuals and small businesses looking to establish an online presence.</span> */}
          <ul className={styles.featuresList}>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> 5w's Strategic</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Responsive Design</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Mockup Design (UI/UX)</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Hosting + Custom Domain</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> {/* Develop with  */}{/* Built-in technologies  or modern  */}Vanilla, Libraries or Frameworks</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Basic SEO</li>
          </ul>
          <a href='#contact' className={styles.linkButton}>Contact Me <FontAwesomeIcon icon={faArrowDown} className={styles.icon} /></a>
        </li>
        <li className={styles.pricingItem}>
          <span className={styles.tag}><FontAwesomeIcon icon={faPhone} className={styles.icon} /> Mobile Development</span>
          <h3 className={styles.planName}>Mobile Application</h3>
          <p className={styles.planPrice}>Started From <span className={styles.currency}>&#36;525.92 USD</span></p>
          <ul className={styles.featuresList}>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Mockup Design (UI/UX)</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> iPhone and/or Android</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Deployment to App Stores</li>
          </ul>
          <a href='#contact' className={styles.linkButton}>Contact Me <FontAwesomeIcon icon={faArrowDown} className={styles.icon} /></a>
        </li>
        <li className={styles.pricingItem}>
          <span className={styles.tag}><FontAwesomeIcon icon={faDashboard} className={styles.icon} /> Data Science</span>
          <h3 className={styles.planName}>Data Dashboard</h3>
          <p className={styles.planPrice}>Started From <span className={styles.currency}>&#36;525.92 USD</span></p>
          <ul className={styles.featuresList}>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Beautiful Data Visualization</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Forecasting and Trend analysis</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Interactive Dashboards</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Advanced Segmentation</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Data-Driven Decision-Making</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Facts, Metrics and Insights</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> KPI's and Reports</li>
          </ul>
          <a href='#contact' className={styles.linkButton}>Contact Me <FontAwesomeIcon icon={faArrowDown} className={styles.icon} /></a>
        </li>
        <li className={styles.pricingItem}>
          <span className={styles.tag}><FontAwesomeIcon icon={faCode} className={styles.icon} /> Software Development</span>
          <h3 className={styles.planName}>Other Project</h3>
          <p className={styles.planPrice}>Contact me <span className={styles.currency}>for pricing</span></p>
          <ul className={styles.featuresList}>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Ongoing Technical Support</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Accurate pricing</li>
            <li><FontAwesomeIcon icon={faCircleCheck} className={styles.icon} /> Custom Solutions</li>
          </ul>
          <a href='#contact' className={styles.linkButton}>Contact me <FontAwesomeIcon icon={faArrowDown} className={styles.icon} /></a>
        </li>
      </ul>
      <span className={styles.disclaimer}><FontAwesomeIcon icon={faInfoCircle} className={styles.icon} /> * Price may vary based on project complexity and requirements.</span>
    </section>
  );
};

export default Pricing;
