import { useEffect, useState } from 'react';
import a3e from '../assets/a3e.webp';
import amazon from '../assets/amazon.svg';
import bamx from '../assets/bamx.webp';
import danu from '../assets/danu.png';
import kanbanize from '../assets/kanbanize.png';
import wizeline from '../assets/wizeline.svg';
import Card from '../components/Card';
/* import { ProjectsContext } from '../contexts/ProjectsContext'; */
import { useTranslation } from 'react-i18next';
import styles from '../styles/Projects.module.css';
import ProjectSwitcher from './ProjectSwitcher';

const Projects = () => {
  const { t, i18n } = useTranslation("global");

  const [paths, setPaths] = useState([
    {
      id: 1,
      path: t('Projects.btnSwitcher.all'),
      active: false
    },
    {
      id: 2,
      path: t('Projects.btnSwitcher.web'),
      active: true
    },
    {
      id: 3,
      path: t('Projects.btnSwitcher.mobile'),
      active: false
    },
    {
      id: 4,
      path: t('Projects.btnSwitcher.game'),
      active: false
    },
    {
      id: 5,
      path: t('Projects.btnSwitcher.data'),
      active: false
    }
  ]);

  const buildProjects = (tFn) => [
    {
      id: 1,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Red BAMX',
      title: tFn('Projects.projectsList.p1.title'),
      role: tFn('Projects.projectsList.p1.role'),
      date: tFn('Projects.projectsList.p1.date'),
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      logo: bamx,
      description: tFn('Projects.projectsList.p1.description'),
      skills: ['React', 'CSS', 'Figma', 'UI/UX'],
      link: 'https://bamx.org.mx',
      preview: 'https://bamx.org.mx',
      repo: 'https://github.com/Ant20ni02/banco-de-alimentos'
    },
    {
      id: 2,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Wizeline',
      title: tFn('Projects.projectsList.p2.title'),
      role: tFn('Projects.projectsList.p2.role'),
      date: tFn('Projects.projectsList.p2.date'),
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      logo: wizeline,
      description: tFn('Projects.projectsList.p2.description'),
      skills: ['Next.js', 'Tailwind'],
      link: 'https://www.wizeline.com/',
      preview: 'https://bamx.org.mx',
      repo: 'https://github.com/wizelineacademy/itesm-socioformador-ago-dec-2023-team-03'
    },
    {
      id: 3,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'A3E Ingenieros',
      title: tFn('Projects.projectsList.p3.title'),
      role: tFn('Projects.projectsList.p3.role'),
      date: tFn('Projects.projectsList.p3.date'),
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      logo: a3e,
      description: tFn('Projects.projectsList.p3.description'),
      skills: ['MongoDB', 'Express.js', 'Node.js', 'React.js'],
      link: 'https://www.a3eingenieros.com.mx',
      preview: 'https://meeting-rooms-app.vercel.app',
      repo: 'https://github.com/elvisscochito/meeting-rooms-app'
    },
    {
      id: 4,
      path: [tFn('Projects.btnSwitcher.mobile'), tFn('Projects.btnSwitcher.all')],
      brand: 'Neza Startup',
      title: tFn('Projects.projectsList.p4.title'),
      role: tFn('Projects.projectsList.p4.role'),
      date: tFn('Projects.projectsList.p4.date'),
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      logo: bamx,
      description: tFn('Projects.projectsList.p4.description'),
      skills: ['Swift', 'iOS', 'Xcode', 'UI/UX'],
      link: 'https://github.com/elvisscochito/mycover-app',
      preview: 'https://github.com/elvisscochito/mycover-app',
      repo: 'https://github.com/elvisscochito/mycover-app'
    },
    {
      id: 5,
      path: [tFn('Projects.btnSwitcher.data'), tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Danu Analitica',
      title: tFn('Projects.projectsList.p5.title'),
      role: tFn('Projects.projectsList.p5.role'),
      date: tFn('Projects.projectsList.p5.date'),
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      logo: danu,
      description: tFn('Projects.projectsList.p5.description'),
      skills: ['Python', 'Streamlit', 'Pandas', 'Data Visualization', 'AI/ML'],
      link: 'https://github.com/elvisscochito/data-analytics-dashboard',
      preview: 'https://danu-data-analytics-dashboard.streamlit.app',
      repo: 'https://github.com/elvisscochito/data-analytics-dashboard'
    },
    {
      id: 6,
      path: [tFn('Projects.btnSwitcher.game'), tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Amazon',
      title: tFn('Projects.projectsList.p6.title'),
      role: tFn('Projects.projectsList.p6.role'),
      date: tFn('Projects.projectsList.p6.date'),
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      logo: amazon,
      description: tFn('Projects.projectsList.p6.description'),
      skills: ['Unity', 'C#', 'Web3', 'React.js', 'CSS'],
      link: 'https://github.com/elvisscochito/projects/tree/main/escaperoom',
      preview: 'https://github.com/elvisscochito/projects/tree/main/escaperoom',
      repo: 'https://github.com/elvisscochito/projects/tree/main/escaperoom'
    },
    {
      id: 7,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Kanbanize',
      title: tFn('Projects.projectsList.p7.title'),
      role: tFn('Projects.projectsList.p7.role'),
      date: tFn('Projects.projectsList.p7.date'),
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      logo: kanbanize,
      description: tFn('Projects.projectsList.p7.description'),
      skills: ['React.js', 'Express.js', 'Node.js'],
      link: 'https://github.com/elvisscochito/kanbanize-lite',
      preview: 'https://github.com/elvisscochito/kanbanize-lite',
      repo: 'https://github.com/elvisscochito/kanbanize-lite'
    }
  ];

  const [projects, setProjects] = useState(buildProjects(t));

  // Update projects when language changes
  useEffect(() => {
    setProjects(buildProjects(t));
  }, [i18n.language, t]);

  /* const buttonStyles = (active) => {
    return {
      color: active ? '#333' : '#999',
    }
  } */

  const handlePathSwitch = (id) => {
    setPaths(paths.map(path => ({
      ...path,
      active: path.id === id
    })));
  }

  const activePath = paths.find(path => path.active);

  return (
    <section id="projects" className={styles.projects}>
      <header className={styles.header}>
        <h2 className={styles.heading}>{t("Projects.heading")}</h2>
        <span className={styles.span}>{t("Projects.subheading")}</span>
      </header>

      {/* <ProjectsContext.Provider value={{ projectsButtons, handleProjectsSwitch }}>
        <ProjectSwitcher />
      </ProjectsContext.Provider> */}
      <ProjectSwitcher projectsButtons={paths} handleProjectsSwitch={handlePathSwitch} />

      <div className={styles.projectsContainer}>
        {
          projects
            .filter(project => project.path.includes(activePath.path))
            .map(project => (
              <Card
                key={project.id}
                brand={project.brand}
                title={project.title}
                role={project.role}
                date={project.date}
                thumbnail={project.thumbnail}
                logo={project.logo}
                description={project.description}
                skills={project.skills}
                link={project.link}
                preview={project.preview}
                repo={project.repo}
              />
            ))
        }
      </div>
    </section>
  );
}

export default Projects;
