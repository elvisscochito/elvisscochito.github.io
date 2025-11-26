import { useState } from 'react';
import seitc from '../assets/seitc_logo.jpeg';
import swifttec from '../assets/swift.png';
import styles from '../styles/ActivitiesAndSocieties.module.css';
import ActivitiesAndSocietiesCard from './ActivitiesAndSocietiesCard';

const ActivitiesAndSocieties = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: 'Board Member in SEITC (Computer Science Student Society)',
      description: 'Engaged in weekly meetings, coding sessions, and tech talks to enhance programming skills and network with fellow enthusiasts.',
      logo: seitc,
      link: 'https://www.linkedin.com/company/seitc/posts/?feedView=all'
    },
    {
      id: 2,
      name: 'SwiftTec (Student group for Developers of Apple Technologies)',
      description: 'Assisted in teaching coding fundamentals to beginners and helped organize bootcamp events.',
      logo: swifttec,
      link: 'https://www.linkedin.com/company/swifttecc/posts/?feedView=all'
    }
  ]);
  return (
    <section id='activities-and-societies' className={styles.activitiesAndSocieties}>
      <header className={styles.header}>
        <h2 className={styles.sectionTitle}>Activities & Societies</h2>
        <span className={styles.sectionSubtitle}>Some of the activities and societies I've been involved with.</span>
      </header>

      <ul className={styles.activitiesList}>
        {activities.map(activity => (
          <li key={activity.id} className={styles.activityItem}>
            <ActivitiesAndSocietiesCard
              name={activity.name}
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
