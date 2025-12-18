/* import { faBuilding, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import medium from '../assets/medium.svg';
import me from '../assets/profile.webp';
import styles from '../styles/Publications.module.css';

const Publications = () => {
  const { t, i18n } = useTranslation("global");

  const buildPublications = (tFn) => [
    {
      id: 1,
      title: 'Top 7 best Visual Studio Code Extensions according to you',
      publisher: 'Medium',
      author: 'Elviro Dominguez Soriano',
      date: t('Publications.publicationsList.p1.publicationDate'),
      details: 'Published in Web Development Journal, March 2022',
      link: 'https://medium.com/@elvisscochito/top-7-best-visual-studio-code-extensions-according-to-you-e3da4ebd136c',
      readTime: t('Publications.publicationsList.p1.readTime')
    },
    {
      id: 2,
      title: 'Is GitHub copilot really worth it?',
      publisher: 'Medium',
      author: 'Elviro Dominguez Soriano',
      date: t('Publications.publicationsList.p2.publicationDate'),
      details: 'Published in Frontend Monthly, July 2021',
      link: 'https://medium.com/@elvisscochito/is-github-copilot-really-worth-it-802f1c775015',
      readTime: t('Publications.publicationsList.p2.readTime')
    }
    ,
    {
      id: 3,
      title: 'The truth about AI generators',
      publisher: 'Medium',
      author: 'Elviro Dominguez Soriano',
      date: t('Publications.publicationsList.p3.publicationDate'),
      details: 'Published in Frontend Monthly, July 2021',
      link: 'https://medium.com/@elvisscochito/the-truth-about-ai-generators-745842ccacc',
      readTime: t('Publications.publicationsList.p3.readTime')
    }
  ];

  const [publications, setPublications] = useState(buildPublications(t));

  useEffect(() => {
    setPublications(buildPublications(t));
  }, [i18n.language, t]);

  return (
    <section id="publications" className={styles.publications}>
      <header className={styles.header}>
        <h2 className={styles.heading}>{t("Publications.heading")}</h2>
        <span className={styles.span}>{t("Publications.subheading")}</span>
      </header>
      <ul className={styles.publicationsList}>
        {
          publications.map(publications => (
            <li key={publications.id} className={styles.publicationItem}>
              <h3 className={styles.publicationTitle}>{publications.title}</h3>

              <span className={styles.publicationPublisher}>
                {/* <FontAwesomeIcon icon={faBuilding} className={styles.icon} /> */} {t("Publications.published")} {publications.publisher}<img src={medium} alt="Medium Logo" className={styles.image} />
              </span>

              <span className={styles.publicationAuthor}>
                {/* <FontAwesomeIcon icon={faUser} className={styles.icon} /> */} {t("Publications.by")} {publications.author}<img src={me} alt="Author Profile" className={styles.image} />
              </span>

              <span className={styles.publicationDate}>{/* <FontAwesomeIcon icon={faCalendar} className={styles.icon} /> */}{publications.date}</span>
              {/* <p className={styles.publicationDetails}>{publications.details}</p> */}
              <span className={styles.readTime}>{publications.readTime}</span>
              <a href={publications.link} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>{t("Publications.btn")} &#8599;</a>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Publications;
