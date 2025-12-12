import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import apple from '../assets/apple.jpeg';
import apple10 from '../assets/apple10.jpeg';
import apple2 from '../assets/apple2.jpeg';
import apple3 from '../assets/apple3.jpeg';
import apple4 from '../assets/apple4.jpeg';
import apple5 from '../assets/apple5.jpeg';
import apple6 from '../assets/apple6.jpeg';
import apple7 from '../assets/apple7.jpeg';
import apple8 from '../assets/apple8.jpeg';
import apple9 from '../assets/apple9.jpeg';
import colombia from '../assets/colombia.jpeg';
import colombia10 from '../assets/colombia10.jpeg';
import colombia11 from '../assets/colombia11.jpeg';
import colombia2 from '../assets/colombia2.jpeg';
import colombia3 from '../assets/colombia3.jpeg';
import colombia4 from '../assets/colombia4.jpeg';
import colombia5 from '../assets/colombia5.jpeg';
import colombia6 from '../assets/colombia6.jpeg';
import colombia7 from '../assets/colombia7.jpeg';
import colombia8 from '../assets/colombia8.jpeg';
import colombia9 from '../assets/colombia9.jpeg';
import gess from '../assets/gess.jpeg';
import gess2 from '../assets/gess2.jpeg';
import gess3 from '../assets/gess3.jpeg';
import gess4 from '../assets/gess4.jpeg';
import nasa from '../assets/nasa.jpg';
import nasa10 from '../assets/nasa10.jpeg';
import nasa11 from '../assets/nasa11.jpeg';
import nasa2 from '../assets/nasa2.jpeg';
import nasa3 from '../assets/nasa3.jpeg';
import nasa4 from '../assets/nasa4.jpeg';
import nasa5 from '../assets/nasa5.jpeg';
import nasa6 from '../assets/nasa6.jpeg';
import nasa7 from '../assets/nasa7.jpeg';
import nasa8 from '../assets/nasa8.jpeg';
import nasa9 from '../assets/nasa9.jpeg';
import nyc10 from '../assets/nyc10.jpeg';
import nyc3 from '../assets/nyc3.jpeg';
import nyc4 from '../assets/nyc4.jpeg';
import nyc5 from '../assets/nyc5.jpeg';
import nyc6 from '../assets/nyc6.jpeg';
import nyc7 from '../assets/nyc7.jpeg';
import nyc8 from '../assets/nyc8.jpeg';
import nyc9 from '../assets/nyc9.jpg';

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
      images: [
        apple,
        apple2,
        apple3,
        apple4,
        apple5,
        apple6,
        apple7,
        apple8,
        apple9,
        apple10,
      ],
      date: tFn('HonorsAndAwards.appleDeveloperConferenceDate'),
      location: 'Cupertino, CA',
    },
    {
      id: 2,
      title: tFn('HonorsAndAwards.nycTitle'),
      description: tFn('HonorsAndAwards.nycDescription'),
      images: [
        nyc9,
        nyc3,
        nyc4,
        nyc5,
        nyc6,
        nyc7,
        nyc8,
        nyc10,
      ],
      date: tFn('HonorsAndAwards.nycDate'),
      location: 'New York City, NY',
    },
    {
      id: 3,
      title: tFn('HonorsAndAwards.nasaTitle'),
      description: tFn('HonorsAndAwards.nasaDescription'),
      images: [
        nasa,
        nasa3,
        nasa4,
        nasa5,
        nasa6,
        nasa7,
        nasa8,
        nasa9,
        nasa10,
        nasa2,
        nasa11,
      ],
      date: tFn('HonorsAndAwards.nasaDate'),
      location: 'Dallas, TX',
    },
    {
      id: 4,
      title: tFn('HonorsAndAwards.colombiaTitle'),
      description: tFn('HonorsAndAwards.colombiaDescription'),
      images: [
        colombia,
        colombia2,
        colombia3,
        colombia4,
        colombia5,
        colombia6,
        colombia7,
        colombia8,
        colombia9,
        colombia10,
        colombia11,
      ],
      date: tFn('HonorsAndAwards.colombiaDate'),
      location: 'Bogota, Colombia',
    },
    {
      id: 5,
      title: tFn('HonorsAndAwards.gessTittle'),
      description: tFn('HonorsAndAwards.gessDescription'),
      images: [
        gess,
        gess2,
        gess3,
        gess4,
      ],
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
                images={award.images}
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
