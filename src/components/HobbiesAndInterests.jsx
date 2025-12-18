import { faGithub, faGoodreads, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faBook, faCode, faPlane, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import HobbiesAndInterestsCard from '../components/HobbiesAndInterestsCard';
import styles from '../styles/HobbiesAndInterests.module.css';

const HobbiesAndInterests = () => {
  const { t, i18n } = useTranslation("global");

  const buildHobbies = (tFn) => [
    {
      id: 1,
      name: tFn('HobbiesAndInterests.hobbiesList.h1.name'),
      description: tFn('HobbiesAndInterests.hobbiesList.h1.description'),
      icon: faCode,
      link: 'https://github.com/elvisscochito',
      platformName: 'GitHub',
      platformIcon: faGithub
    },
    /* {
      id: 2,
      name: tFn('HobbiesAndInterests.hobbiesList.h2.name'),
      description: tFn('HobbiesAndInterests.hobbiesList.h2.description'),
      icon: faCode
    }, */
    {
      id: 3,
      name: tFn('HobbiesAndInterests.hobbiesList.h3.name'),
      description: tFn('HobbiesAndInterests.hobbiesList.h3.description'),
      icon: faPlane,
      link: 'https://www.instagram.com/elvisscochito',
      platformName: 'Instagram',
      platformIcon: faInstagram
    },
    {
      id: 4,
      name: tFn('HobbiesAndInterests.hobbiesList.h4.name'),
      description: tFn('HobbiesAndInterests.hobbiesList.h4.description'),
      icon: faBook,
      link: 'https://www.goodreads.com/user/show/12345678-elvisscochito',
      platformName: 'Goodreads',
      platformIcon: faGoodreads
    },
    /* (videography, photography, blogging, podcasting), podcast */
    {
      id: 5,
      name: tFn('HobbiesAndInterests.hobbiesList.h5.name'),
      description: tFn('HobbiesAndInterests.hobbiesList.h5.description'),
      icon: faPlay,
      link: 'https://medium.com/@elvisscochito',
      platformName: 'Medium',
      platformIcon: faMedium
    }
  ];

  const [hobbies, setHobbies] = useState(buildHobbies(t));

  useEffect(() => {
    setHobbies(buildHobbies(t));
  }, [i18n.language, t]);

  return (
    <section id='hobbies-and-interests' className={styles.hobbiesSection}>
      <header className={styles.header}>
        <h2 className={styles.sectionTitle}>{t("HobbiesAndInterests.heading")}</h2>
        <span className={styles.sectionSubtitle}>{t("HobbiesAndInterests.subheading")}</span>
      </header>
      <ul className={styles.hobbiesList}>
        {hobbies.map(hobby => (
          <li key={hobby.id} className={styles.hobbyItem}>
            <HobbiesAndInterestsCard
              name={hobby.name}
              description={hobby.description}
              icon={hobby.icon}
              link={hobby.link}
              platformName={hobby.platformName}
              platformIcon={hobby.platformIcon}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HobbiesAndInterests;
