import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import seitc from '../assets/seitc_logo.jpeg';
import swifttec from '../assets/swift.png';
import styles from '../styles/ActivitiesAndSocieties.module.css';
import ActivitiesAndSocietiesCard from './ActivitiesAndSocietiesCard';

const ActivitiesAndSocieties = () => {
  const { t, i18n } = useTranslation("global");

  const buildActivities = (tFn) => [
    {
      id: 1,
      name: t('ActivitiesAndSocieties.activitiesList.a1.name'),
      role: t('ActivitiesAndSocieties.activitiesList.a1.role'),
      duration: t('ActivitiesAndSocieties.activitiesList.a1.duration'),
      description: t('ActivitiesAndSocieties.activitiesList.a1.description'),
      logo: seitc,
      link: 'https://www.linkedin.com/company/seitc/posts/?feedView=all'
    },
    {
      id: 2,
      name: t('ActivitiesAndSocieties.activitiesList.a2.name'),
      role: t('ActivitiesAndSocieties.activitiesList.a2.role'),
      duration: t('ActivitiesAndSocieties.activitiesList.a2.duration'),
      description: t('ActivitiesAndSocieties.activitiesList.a2.description'),
      logo: swifttec,
      link: 'https://www.linkedin.com/company/swifttecc/posts/?feedView=all'
    }
  ];

  const [activities, setActivities] = useState(buildActivities(t));

  useEffect(() => {
    setActivities(buildActivities(t));
  }, [i18n.language, t]);

  return (
    <section id='activities-and-societies' className={styles.activitiesAndSocieties}>
      <header className={styles.header}>
        <h2 className={styles.sectionTitle}>{t("ActivitiesAndSocieties.heading")}</h2>
        <span className={styles.sectionSubtitle}>{t("ActivitiesAndSocieties.subheading")}</span>
      </header>

      <ul className={styles.activitiesList}>
        {activities.map(activity => (
          <li key={activity.id} className={styles.activityItem}>
            <ActivitiesAndSocietiesCard
              name={activity.name}
              role={activity.role}
              duration={activity.duration}
              description={activity.description}
              logo={activity.logo}
              link={activity.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ActivitiesAndSocieties;
