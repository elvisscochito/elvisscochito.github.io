/* import { faBuilding, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import { useState } from 'react';
import medium from '../assets/medium.png';
import me from '../assets/profile.jpg';
import styles from '../styles/Publications.module.css';

const Publications = () => {
  const [publications, setPublications] = useState([
    {
      id: 1,
      title: 'Top 7 best Visual Studio Code Extensions according to you',
      publisher: 'Medium',
      author: 'Elviro Dominguez Soriano',
      date: 'October 31, 2021',
      details: 'Published in Web Development Journal, March 2022',
      link: 'https://medium.com/@elvisscochito/top-7-best-visual-studio-code-extensions-according-to-you-e3da4ebd136c',
      readTime: '4 min read'
    },
    {
      id: 2,
      title: 'Is GitHub copilot really worth it?',
      publisher: 'Medium',
      author: 'Elviro Dominguez Soriano',
      date: 'September 20, 2022',
      details: 'Published in Frontend Monthly, July 2021',
      link: 'https://medium.com/@elvisscochito/is-github-copilot-really-worth-it-802f1c775015',
      readTime: '3 min read'
    }
    ,
    {
      id: 3,
      title: 'The truth about AI generators',
      publisher: 'Medium',
      author: 'Elviro Dominguez Soriano',
      date: 'February 6, 2023',
      details: 'Published in Frontend Monthly, July 2021',
      link: 'https://medium.com/@elvisscochito/the-truth-about-ai-generators-745842ccacc',
      readTime: '2 min read'
    }
  ]);
  return (
    <section id="publications" className={styles.publications}>
      <header className={styles.header}>
        <h2 className={styles.heading}>Publications</h2>
        <span className={styles.span}>A collection of my published works and contributions to the field.</span>
      </header>
      <ul className={styles.publicationsList}>
        {
          publications.map(publications => (
            <li key={publications.id} className={styles.publicationItem}>
              <h3 className={styles.publicationTitle}>{publications.title}</h3>

              <span className={styles.publicationPublisher}>
                {/* <FontAwesomeIcon icon={faBuilding} className={styles.icon} /> */} Published in {publications.publisher}<img src={medium} alt="Medium Logo" className={styles.image} />
              </span>

              <span className={styles.publicationAuthor}>
                {/* <FontAwesomeIcon icon={faUser} className={styles.icon} /> */}By {publications.author}<img src={me} alt="Author Profile" className={styles.image} />
              </span>

              <span className={styles.publicationDate}>{/* <FontAwesomeIcon icon={faCalendar} className={styles.icon} /> */}{publications.date}</span>
              {/* <p className={styles.publicationDetails}>{publications.details}</p> */}
              <span className={styles.readTime}>{publications.readTime}</span>
              <a href={publications.link} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>Read More &#8599;</a>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Publications;
