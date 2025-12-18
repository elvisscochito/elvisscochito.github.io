import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import softtek from '../assets/softtek.svg';
import tec from '../assets/tecnologico.svg';
import styles from '../styles/WorkExperience.module.css';
import WorkExperienceCard from './WorkExperienceCard.jsx';

const WorkExperience = () => {
  const { t, i18n } = useTranslation("global");

  const buildExperiences = (tFn) => [
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
      title: tFn('WorkExperience.softtekTitle'),
      url: "https://www.softtek.com",
      company: 'Softtek',
      logo: softtek,
      type: tFn('WorkExperience.softtekType'),
      positionLink: "https://www.softtek.com/agile-devops",
      date: tFn('WorkExperience.softtekDate'),
      duration: '8 months',
      location: tFn('WorkExperience.softtekLocation'),
      locationType: tFn('WorkExperience.softtekLocationType'),
      responsibilities: [
        tFn('WorkExperience.softtekResponsibilities.r1')
      ]
    },
    {
      id: 3,
      title: tFn('WorkExperience.tecTitle'),
      company: 'Tecnológico de Monterrey',
      url: "https://www.tec.mx",
      logo: tec,
      type: tFn('WorkExperience.tecType'),
      positionLink: "http://www.ccm.itesm.mx/life/oncampusjobs.html",
      date: tFn('WorkExperience.tecDate'),
      duration: tFn('WorkExperience.tecDuration'),
      location: tFn('WorkExperience.tecLocation'),
      locationType: tFn('WorkExperience.tecLocationType'),
      responsibilities: [
        tFn('WorkExperience.tecResponsibilities.r1')
      ]
    }
  ];

  const [experiences, setExperiences] = useState(() => buildExperiences(t));

  useEffect(() => {
    setExperiences(buildExperiences(t));
  }, [i18n.language, t]);

  return (
    <section id="work-experience" className={styles.workExperience}>
      <header className={styles.header}>
        <h2 className={styles.workExperienceHeading}>{t("WorkExperience.heading")}</h2>
        <span>{t("WorkExperience.subheading")}</span>
      </header>
      <div className={styles.experiencesContainer}>
        {/* <hr className={styles.line} /> */}
        {
          experiences.map((exp) => (
            <WorkExperienceCard
              key={exp.id}
              title={exp.title}
              url={exp.url}
              company={exp.company}
              logo={exp.logo}
              type={exp.type}
              positionLink={exp.positionLink}
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
