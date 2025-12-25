import { faCode, faDashboard, faGlobe, faInfoCircle, faLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Pricing.module.css';
import CurrencyContext from './CurrencyContext';
import PricingCard from './PricingCard';

const Pricing = () => {
  const { t } = useTranslation("global");
  const { currency } = useContext(CurrencyContext);

  const buildHobbies = (tFn) => [
    {
      id: 1,
      icon: faGlobe,
      tag: tFn('Pricing.pricingList.p1.tag'),
      title: tFn('Pricing.pricingList.p1.title'),
      price:
        /* currency === 'USD'
          ? tFn('Pricing.pricingList.p1.price.USD')
          : tFn('Pricing.pricingList.p1.price.MXN') */
        tFn(`Pricing.pricingList.p1.price.${currency}`),
      frequency: tFn('Pricing.pricingList.p1.frequency'),
      features: [
        tFn('Pricing.pricingList.p1.featuresList.f1'),
        tFn('Pricing.pricingList.p1.featuresList.f2'),
        tFn('Pricing.pricingList.p1.featuresList.f3'),
        tFn('Pricing.pricingList.p1.featuresList.f4'),
        tFn('Pricing.pricingList.p1.featuresList.f5'),
        tFn('Pricing.pricingList.p1.featuresList.f6'),
        tFn('Pricing.pricingList.p1.featuresList.f7'),
        tFn('Pricing.pricingList.p1.featuresList.f8'),
        tFn('Pricing.pricingList.p1.featuresList.f9'),
        tFn('Pricing.pricingList.p1.featuresList.f10')
      ],
    },
    {
      id: 2,
      icon: faPhone,
      tag: tFn('Pricing.pricingList.p2.tag'),
      title: tFn('Pricing.pricingList.p2.title'),
      price: tFn(`Pricing.pricingList.p2.price.${currency}`),
      frequency: tFn('Pricing.pricingList.p2.frequency'),
      features: [
        tFn('Pricing.pricingList.p2.featuresList.f1'),
        tFn('Pricing.pricingList.p2.featuresList.f2'),
        tFn('Pricing.pricingList.p2.featuresList.f3'),
        tFn('Pricing.pricingList.p2.featuresList.f4'),
        tFn('Pricing.pricingList.p2.featuresList.f5'),
        tFn('Pricing.pricingList.p2.featuresList.f6'),
        tFn('Pricing.pricingList.p2.featuresList.f7'),
        tFn('Pricing.pricingList.p2.featuresList.f8'),
        tFn('Pricing.pricingList.p2.featuresList.f9'),
      ],
    },
    {
      id: 3,
      icon: faDashboard,
      tag: tFn('Pricing.pricingList.p3.tag'),
      title: tFn('Pricing.pricingList.p3.title'),
      price: tFn(`Pricing.pricingList.p3.price.${currency}`),
      frequency: tFn('Pricing.pricingList.p3.frequency'),
      features: [
        tFn('Pricing.pricingList.p3.featuresList.f1'),
        tFn('Pricing.pricingList.p3.featuresList.f2'),
        tFn('Pricing.pricingList.p3.featuresList.f3'),
        tFn('Pricing.pricingList.p3.featuresList.f4'),
        tFn('Pricing.pricingList.p3.featuresList.f5'),
        tFn('Pricing.pricingList.p3.featuresList.f6'),
        tFn('Pricing.pricingList.p3.featuresList.f7'),
        tFn('Pricing.pricingList.p3.featuresList.f8'),
        tFn('Pricing.pricingList.p3.featuresList.f9'),
        tFn('Pricing.pricingList.p3.featuresList.f10'),
        tFn('Pricing.pricingList.p3.featuresList.f11'),
      ],
    },
    {
      id: 4,
      icon: faCode,
      tag: tFn('Pricing.pricingList.p4.tag'),
      title: tFn('Pricing.pricingList.p4.title'),
      price: tFn('Pricing.pricingList.p4.price'),
      frequency: tFn('Pricing.pricingList.p4.frequency'),
      features: [
        tFn('Pricing.pricingList.p4.featuresList.f1'),
        tFn('Pricing.pricingList.p4.featuresList.f2'),
        tFn('Pricing.pricingList.p4.featuresList.f3'),
        tFn('Pricing.pricingList.p4.featuresList.f4'),
      ],
    },
    {
      id: 5,
      icon: faLaptop,
      tag: tFn('Pricing.pricingList.p5.tag'),
      title: tFn('Pricing.pricingList.p5.title'),
      price: tFn('Pricing.pricingList.p5.price'),
      frequency: tFn('Pricing.pricingList.p5.frequency'),
      features: [
        tFn('Pricing.pricingList.p5.featuresList.f1'),
        tFn('Pricing.pricingList.p5.featuresList.f2'),
        tFn('Pricing.pricingList.p5.featuresList.f3'),
        tFn('Pricing.pricingList.p5.featuresList.f4'),
        tFn('Pricing.pricingList.p5.featuresList.f5'),
        tFn('Pricing.pricingList.p5.featuresList.f6'),
        tFn('Pricing.pricingList.p5.featuresList.f7'),
        tFn('Pricing.pricingList.p5.featuresList.f8'),
        tFn('Pricing.pricingList.p5.featuresList.f9'),
        tFn('Pricing.pricingList.p5.featuresList.f10'),
        tFn('Pricing.pricingList.p5.featuresList.f11'),
        tFn('Pricing.pricingList.p5.featuresList.f12')
      ],
    }
  ];

  const [plans, setPlans] = useState(buildHobbies(t));

  useEffect(() => {
    setPlans(buildHobbies(t));
  }, [t, currency]);

  return (
    <section id='pricing' className={styles.pricingSection}>
      <header className={styles.header}>
        <h2 className={styles.heading}>{t('Pricing.heading')}</h2>
        <span className={styles.subheading}>
          {/* Choose the offer that best fits your needs and budget. Whether you're an individual or a business, I have options for everyone.  */}{t('Pricing.subheading')}
        </span>
      </header>
      <ul className={styles.pricingList}>
        {
          plans.map((plan) => (
            <li key={plan.id} className={styles.pricingItem}>
              <PricingCard
                cardKey={plan.id}
                icon={plan.icon}
                tag={plan.tag}
                title={plan.title}
                price={plan.price}
                frequency={plan.frequency}
                features={plan.features}
                btn={plan.btn}
              />
            </li>
          ))
        }
      </ul>
      <span className={styles.disclaimer}><FontAwesomeIcon icon={faInfoCircle} className={styles.icon} /> {t('Pricing.disclaimer')}</span>
    </section>
  );
};

export default Pricing;
