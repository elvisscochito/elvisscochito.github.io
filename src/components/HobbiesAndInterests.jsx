import { faBook, faCode, faPlane, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import styles from '../styles/HobbiesAndInterests.module.css';

const HobbiesAndInterests = () => {
  const [hobbies, setHobbies] = useState([
    {
      id: 1,
      name: 'Coding',
      description: 'Exploring new programming languages and frameworks by building innovative projects that challenge and enhance my skills and creativity.',
      icon: faCode
    },
    /* {
      id: 2,
      name: 'Photography',
      description: 'Capturing moments through the lens, exploring different styles and techniques to create compelling visual stories.',
      icon: faCode
    }, */
    {
      id: 3,
      name: 'Traveling',
      description: 'Exploring new cultures, cuisines, and landscapes to broaden my perspective of the world and gain new experiences.',
      icon: faPlane
    },
    {
      id: 4,
      name: 'Reading',
      description: 'Diving into a variety of genres, from fiction to non-fiction, to expand my knowledge and imagination.',
      icon: faBook
    },
    /* (videography, photography, blogging, podcasting), podcast */
    {
      id: 5,
      name: 'Content creation',
      description: 'Creating engaging content (photos, videos, blogs) across various platforms to share knowledge, inspire others, and express creativity.',
      icon: faPlay
    }
  ]);

  return (
    <section className={styles.hobbiesSection}>
      <header className={styles.header}>
        <h2 className={styles.sectionTitle}>Hobbies & Interests</h2>
        <span className={styles.sectionSubtitle}>Beyond coding, these are some of my passions.</span>
      </header>
      <ul className={styles.hobbiesList}>
        {hobbies.map(hobby => (
          <li key={hobby.id} className={styles.hobbyItem}>
            <h3 className={styles.hobbyName}><FontAwesomeIcon icon={hobby.icon} className={styles.icon} />{hobby.name}</h3>
            <p className={styles.hobbyDescription}>{hobby.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HobbiesAndInterests;
