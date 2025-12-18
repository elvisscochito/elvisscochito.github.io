import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import apple from '../assets/apple.webp';
import apple10 from '../assets/apple10.webp';
import apple11 from '../assets/apple11.webp';
import apple2 from '../assets/apple2.webp';
import apple3 from '../assets/apple3.webp';
import apple4 from '../assets/apple4.webp';
import apple5 from '../assets/apple5.webp';
import apple6 from '../assets/apple6.webp';
import apple7 from '../assets/apple7.webp';
import apple8 from '../assets/apple8.webp';
import apple9 from '../assets/apple9.webp';
import colombia from '../assets/colombia.webp';
import colombia10 from '../assets/colombia10.webp';
import colombia11 from '../assets/colombia11.webp';
import colombia2 from '../assets/colombia2.webp';
import colombia3 from '../assets/colombia3.webp';
import colombia4 from '../assets/colombia4.webp';
import colombia5 from '../assets/colombia5.webp';
import colombia6 from '../assets/colombia6.webp';
import colombia7 from '../assets/colombia7.webp';
import colombia8 from '../assets/colombia8.webp';
import colombia9 from '../assets/colombia9.webp';
import gess from '../assets/gess.webp';
import gess2 from '../assets/gess2.webp';
import gess3 from '../assets/gess3.webp';
import gess4 from '../assets/gess4.webp';
import nasa from '../assets/nasa.webp';
import nasa10 from '../assets/nasa10.webp';
import nasa11 from '../assets/nasa11.webp';
import nasa2 from '../assets/nasa2.webp';
import nasa3 from '../assets/nasa3.webp';
import nasa4 from '../assets/nasa4.webp';
import nasa5 from '../assets/nasa5.webp';
import nasa6 from '../assets/nasa6.webp';
import nasa7 from '../assets/nasa7.webp';
import nasa8 from '../assets/nasa8.webp';
import nasa9 from '../assets/nasa9.webp';
import nyc10 from '../assets/nyc10.webp';
import nyc3 from '../assets/nyc3.webp';
import nyc4 from '../assets/nyc4.webp';
import nyc5 from '../assets/nyc5.webp';
import nyc6 from '../assets/nyc6.webp';
import nyc7 from '../assets/nyc7.webp';
import nyc8 from '../assets/nyc8.webp';
import nyc9 from '../assets/nyc9.webp';

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
        apple11,
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
