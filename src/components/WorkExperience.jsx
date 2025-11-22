import { useState } from 'react';
import softtek from '../assets/softtek.svg';
import tec from '../assets/tecnologico.png';
import styles from '../styles/WorkExperience.module.css';
import ExperienceCard from './ExperienceCard.jsx';

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([
    /* {
      id: 1,
      title: 'Software Engineer',
      company: 'Neza Startup',
      type: 'Self-Employed',
      date: 'May 2025 - Present',
      duration: '7 months',
      location: 'Monterrey, Nuevo León, Mexico',
      locationType: 'Remote',
      responsibilities: [
        'Founded Neza Startup: The Star Marketing & Software Startup.'
      ]
    }, */
    {
      id: 2,
      title: 'DevOps Engineer',
      company: 'Softtek',
      logo: softtek,
      type: 'Internship',
      date: 'October 2024 - May 2025',
      duration: '8 months',
      location: 'Monterrey, Nuevo León, Mexico',
      locationType: 'Remote',
      responsibilities: [
        'Developed CI/CD pipelines, managed cloud infrastructure, deployed containerized applications and implemented monitoring solutions to ensure eﬃcient and reliable software delivery.'
      ]
    },
    {
      id: 3,
      title: 'On Campus Job Intern Program',
      company: 'Tecnológico de Monterrey',
      logo: tec,
      type: 'Internship',
      date: 'February 2022 - August 2023',
      duration: '1 year 7 months',
      location: 'Cuernavaca, Morelos, Mexico',
      locationType: 'On-Site',
      responsibilities: [
        'Gained a strong design sense, applied to webs and mobile User Interfaces designs in academic projects.'
      ]
    }
  ]);

  return (
    <section className={styles.workExperience}>
      <header className={styles.header}>
        <h2 className={styles.workExperienceHeading}>Work Experience</h2>
        <span>Where I've applied my skills in real-world scenarios.</span>
      </header>
      <div className={styles.experiencesContainer}>
        {/* <hr className={styles.line} /> */}
        {
          experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              title={exp.title}
              company={exp.company}
              logo={exp.logo}
              type={exp.type}
              date={exp.date}
              duration={exp.duration}
              location={exp.location}
              locationType={exp.locationType}
              responsibilities={exp.responsibilities}
            />
          ))
        }
      </div>
    </section>
  );
}

export default WorkExperience;
