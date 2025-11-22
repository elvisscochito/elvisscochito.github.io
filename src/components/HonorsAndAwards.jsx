import { useState } from 'react';
import apple from '../assets/apple.jpeg';
import colombia from '../assets/colombia.jpeg';
import gess from '../assets/gess.jpeg';
import nasa from '../assets/nasa.jpg';
import nyc from '../assets/nyc.jpg';
import styles from '../styles/HonorsAndAwards.module.css';
import HonorsAndAwardsCard from './HonorsAndAwardsCard';

const HonorsAndAwards = () => {
  const [awards, setAwards] = useState([
    /* at Apple HQ, situated within the Apple Developer Center beside the Apple Park */
    {
      id: 1,
      linkedin: 'https://www.linkedin.com/posts/elviro-dominguez-soriano_i-cant-believe-that-i-was-selected-and-had-activity-7304970693073424385-7bEg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEocAEBcDaj2s8qSInAEk1W7vfq-srSXug',
      title: 'Apple Developer Conference',
      description: 'Attended in-person an Apple developer Conference.',
      image: apple,
      date: 'February 2025',
      location: 'Cupertino, CA'
    },
    {
      id: 2,
      title: 'Big Techs Conferences',
      description: 'Selected to attend conferences at Technology Companies (Google, Amazon, Microsoft, Meta, among others)',
      image: nyc,
      date: 'March 2025',
      location: 'New York City, NY'
    },
    {
      id: 3,
      title: 'NASA Trip',
      description: 'Participated in an academic trip to a Campus Tour at Rice University and NASA.',
      image: nasa,
      date: 'April 2025',
      location: 'Dallas, TX'
    },
    {
      id: 4,
      title: 'Study Abroad Program',
      description: 'Coursework in Smart Cities and Citizenship and cultural immersion.',
      image: colombia,
      date: 'August 2024',
      location: 'Bogota, Colombia'
    },
    {
      id: 5,
      title: 'Global Entrepreneurship Summer School',
      description: 'Selected among other international students to attend GESS program.',
      image: gess,
      date: 'July 2024',
      location: 'Queretaro, Mexico'
    }
  ]);
  return (
    <section id="honors-and-awards" className={styles.honorsAndAwards}>
      <header className={styles.header}>
        <h2 className={styles.honorsAndAwardsHeading}>Honors, Awards & Experiences</h2>
        <span>Recognitions I've received for my work, contributions and experiences I've had.</span>
      </header>
      <ul className={styles.honorsAndAwardsList}>
        {
          awards.map(award => (
            <li className={styles.honorsAndAwardsItem} key={award.id}>
              <HonorsAndAwardsCard
                linkedin={award.linkedin}
                title={award.title}
                description={award.description}
                image={award.image}
                date={award.date}
                location={award.location}
              />
            </li>
          ))
        }
      </ul>
    </section >
  );
};

export default HonorsAndAwards;
