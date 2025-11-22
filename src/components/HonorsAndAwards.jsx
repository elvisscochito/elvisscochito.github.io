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
      description: 'Attended in-person an Apple developer Conference in Cupertino, California.',
      image: apple
    },
    {
      id: 2,
      title: 'Big Techs Conferences',
      description: 'Selected to attend conferences in New York City at Technology Companies (Google, Amazon, Microsoft, Meta, among others)',
      image: nyc
    },
    {
      id: 3,
      title: 'NASA Trip',
      description: 'Participated in an academic trip to a Campus Tour at Rice University and NASA in Dallas, Texas.',
      image: nasa
    },
    {
      id: 4,
      title: 'Study Abroad Program',
      description: 'Coursework in Smart Cities and Citizenship and cultural immersion in Bogota, Colombia.',
      image: colombia
    },
    {
      id: 5,
      title: 'Global Entrepreneurship Summer School',
      description: 'Selected among other international students to attend GESS in Queretaro, Mexico.',
      image: gess
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
              />
            </li>
          ))
        }
      </ul>
    </section >
  );
};

export default HonorsAndAwards;
