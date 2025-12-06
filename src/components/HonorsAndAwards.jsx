import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import apple from '../assets/apple.jpeg';
import colombia from '../assets/colombia.jpeg';
import gess from '../assets/gess.jpeg';
import nasa from '../assets/nasa.jpg';
import nyc from '../assets/nyc.jpg';
import styles from '../styles/HonorsAndAwards.module.css';
import HonorsAndAwardsCard from './HonorsAndAwardsCard';

const HonorsAndAwards = () => {
  const { t, i18n } = useTranslation("global");

  const buildAwards = (tFn) => [
    {
      id: 1,
      linkedin:
        'https://www.linkedin.com/posts/elviro-dominguez-soriano_i-cant-believe-that-i-was-selected-and-had-activity-7304970693073424385-7bEg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEocAEBcDaj2s8qSInAEk1W7vfq-srSXug',
      title: tFn('HonorsAndAwards.appleDeveloperConference'),
      description: tFn('HonorsAndAwards.appleDeveloperConferenceDescription'),
      image: apple,
      date: tFn('HonorsAndAwards.appleDeveloperConferenceDate'),
      location: 'Cupertino, CA',
    },
    {
      id: 2,
      title: tFn('HonorsAndAwards.nycTitle'),
      description: tFn('HonorsAndAwards.nycDescription'),
      image: nyc,
      date: tFn('HonorsAndAwards.nycDate'),
      location: 'New York City, NY',
    },
    {
      id: 3,
      title: tFn('HonorsAndAwards.nasaTitle'),
      description: tFn('HonorsAndAwards.nasaDescription'),
      image: nasa,
      date: tFn('HonorsAndAwards.nasaDate'),
      location: 'Dallas, TX',
    },
    {
      id: 4,
      title: tFn('HonorsAndAwards.colombiaTitle'),
      description: tFn('HonorsAndAwards.colombiaDescription'),
      image: colombia,
      date: tFn('HonorsAndAwards.colombiaDate'),
      location: 'Bogota, Colombia',
    },
    {
      id: 5,
      title: tFn('HonorsAndAwards.gessTittle'),
      description: tFn('HonorsAndAwards.gessDescription'),
      image: gess,
      date: tFn('HonorsAndAwards.gessDate'),
      location: 'Queretaro, Mexico',
    },
  ];

  const [awards, setAwards] = useState(() => buildAwards(t));

  useEffect(() => {
    setAwards(buildAwards(t));
  }, [i18n.language, t]);

  return (
    <section id="honors-and-awards" className={styles.honorsAndAwards}>
      <header className={styles.header}>
        <h2 className={styles.honorsAndAwardsHeading}>{t('HonorsAndAwards.heading')}</h2>
        <span>{t('HonorsAndAwards.subheading')}</span>
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
