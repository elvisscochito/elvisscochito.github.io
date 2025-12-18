/* import { faBuilding, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Publications.module.css';
import PublicationsCard from './PublicationsCard';

const Publications = () => {
  const { t, i18n } = useTranslation("global");

  const buildPublications = (tFn) => [
    {
      id: 1,
      title: 'Top 7 best Visual Studio Code Extensions according to you',
      publisher: 'Medium',
      author: 'Elviro Dominguez Soriano',
      date: tFn('Publications.publicationsList.p1.publicationDate'),
      details: 'Published in Web Development Journal, March 2022',
      link: 'https://medium.com/@elvisscochito/top-7-best-visual-studio-code-extensions-according-to-you-e3da4ebd136c',
      readTime: tFn('Publications.publicationsList.p1.readTime')
    },
    {
      id: 2,
      title: 'Is GitHub copilot really worth it?',
      publisher: 'Medium',
      author: 'Elviro Dominguez Soriano',
      date: tFn('Publications.publicationsList.p2.publicationDate'),
      details: 'Published in Frontend Monthly, July 2021',
      link: 'https://medium.com/@elvisscochito/is-github-copilot-really-worth-it-802f1c775015',
      readTime: tFn('Publications.publicationsList.p2.readTime')
    }
    ,
    {
      id: 3,
      title: 'The truth about AI generators',
      publisher: 'Medium',
      author: 'Elviro Dominguez Soriano',
      date: tFn('Publications.publicationsList.p3.publicationDate'),
      details: 'Published in Frontend Monthly, July 2021',
      link: 'https://medium.com/@elvisscochito/the-truth-about-ai-generators-745842ccacc',
      readTime: tFn('Publications.publicationsList.p3.readTime')
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
              <PublicationsCard
                title={publications.title}
                publisher={publications.publisher}
                author={publications.author}
                date={publications.date}
                readTime={publications.readTime}
                link={publications.link}
              />
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Publications;
