import { useEffect, useState } from 'react';
import a3eBanner from '../assets/a3e-banner-dark.png';
import a3e from '../assets/a3e.webp';
import amazonBanner from '../assets/amazon-dark.png';
import amazon from '../assets/amazon.svg';
import bamx from '../assets/bamx.webp';
import danuBanner from '../assets/danu-banner-dark.png';
import danu from '../assets/danu.png';
import kanbanizeBanner from '../assets/kanbanize-banner-dark.png';
import kanbanize from '../assets/kanbanize.png';
import wizelineBanner from '../assets/wizeline-banner.png';
import wizeline from '../assets/wizeline.svg';
import ProjectCard from './ProjectCard';
/* import { ProjectsContext } from '../contexts/ProjectsContext'; */
import { useTranslation } from 'react-i18next';
import bamxBanner from '../assets/bamx-dark.png';
import blogBanner from '../assets/blog-banner-dark.png';
import concertsBanner from '../assets/concert-cards-banner.png';
import cotizadorBanner from '../assets/cotizador-banner-dark.png';
import githubBanner from '../assets/github-cards-banner-dark.png';
import mixtliBanner from '../assets/mixtli-banner-dark.png';
import mixtli from '../assets/mixtli.png';
import myCoverBanner from '../assets/mycover-banner-dark.png';
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
      thumbnail: bamxBanner,
      logo: bamx,
      description: tFn('Projects.projectsList.p1.description'),
      skills: ['React', 'CSS', 'Figma', 'UI/UX'],
      link: 'https://bamx.org.mx',
      preview: 'https://bamx.org.mx',
      repo: 'https://github.com/Ant20ni02/banco-de-alimentos',
      featured: true,
      type: tFn('Projects.projectsList.p1.type')
    },
    {
      id: 2,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Wizeline',
      title: tFn('Projects.projectsList.p2.title'),
      role: tFn('Projects.projectsList.p2.role'),
      date: tFn('Projects.projectsList.p2.date'),
      thumbnail: wizelineBanner,
      logo: wizeline,
      description: tFn('Projects.projectsList.p2.description'),
      skills: ['Next.js', 'Tailwind'],
      link: 'https://www.wizeline.com/',
      preview: 'https://www.wizeline.com/',
      repo: 'https://github.com/wizelineacademy/itesm-socioformador-ago-dec-2023-team-03',
      featured: false,
      type: tFn('Projects.projectsList.p2.type')
    },
    {
      id: 3,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'A3E Ingenieros',
      title: tFn('Projects.projectsList.p3.title'),
      role: tFn('Projects.projectsList.p3.role'),
      date: tFn('Projects.projectsList.p3.date'),
      thumbnail: a3eBanner,
      logo: a3e,
      description: tFn('Projects.projectsList.p3.description'),
      skills: ['MongoDB', 'Express.js', 'Node.js', 'React.js'],
      link: 'https://www.a3eingenieros.com.mx',
      preview: 'https://meeting-rooms-app.vercel.app',
      repo: 'https://github.com/elvisscochito/meeting-rooms-app',
      featured: true,
      type: tFn('Projects.projectsList.p3.type')
    },
    {
      id: 4,
      path: [tFn('Projects.btnSwitcher.mobile'), tFn('Projects.btnSwitcher.all')],
      brand: 'Neza Startup',
      title: tFn('Projects.projectsList.p4.title'),
      role: tFn('Projects.projectsList.p4.role'),
      date: tFn('Projects.projectsList.p4.date'),
      thumbnail: myCoverBanner,
      logo: bamx,
      description: tFn('Projects.projectsList.p4.description'),
      skills: ['Swift', 'iOS', 'Xcode', 'UI/UX'],
      link: 'https://github.com/elvisscochito/mycover-app',
      preview: 'https://github.com/elvisscochito/mycover-app',
      repo: 'https://github.com/elvisscochito/mycover-app',
      featured: true,
      type: tFn('Projects.projectsList.p4.type')
    },
    {
      id: 5,
      path: [tFn('Projects.btnSwitcher.data'), tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Danu Analitica',
      title: tFn('Projects.projectsList.p5.title'),
      role: tFn('Projects.projectsList.p5.role'),
      date: tFn('Projects.projectsList.p5.date'),
      thumbnail: danuBanner,
      logo: danu,
      description: tFn('Projects.projectsList.p5.description'),
      skills: ['Python', 'Streamlit', 'Pandas', 'Data Visualization', 'AI/ML'],
      link: 'https://github.com/elvisscochito/data-analytics-dashboard',
      preview: 'https://danu-data-analytics-dashboard.streamlit.app',
      repo: 'https://github.com/elvisscochito/data-analytics-dashboard',
      featured: true,
      type: tFn('Projects.projectsList.p5.type')
    },
    {
      id: 6,
      path: [tFn('Projects.btnSwitcher.game'), tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Amazon',
      title: tFn('Projects.projectsList.p6.title'),
      role: tFn('Projects.projectsList.p6.role'),
      date: tFn('Projects.projectsList.p6.date'),
      thumbnail: amazonBanner,
      logo: amazon,
      description: tFn('Projects.projectsList.p6.description'),
      skills: ['Unity', 'C#', 'Web3', 'React.js', 'CSS'],
      link: 'https://github.com/elvisscochito/projects/tree/main/escaperoom',
      preview: 'https://github.com/elvisscochito/projects/tree/main/escaperoom',
      repo: 'https://github.com/elvisscochito/projects/tree/main/escaperoom',
      featured: false,
      type: tFn('Projects.projectsList.p6.type')
    },
    {
      id: 7,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Kanbanize',
      title: tFn('Projects.projectsList.p7.title'),
      role: tFn('Projects.projectsList.p7.role'),
      date: tFn('Projects.projectsList.p7.date'),
      thumbnail: kanbanizeBanner,
      logo: kanbanize,
      description: tFn('Projects.projectsList.p7.description'),
      skills: ['React.js', 'Express.js', 'Node.js'],
      link: 'https://github.com/elvisscochito/kanbanize-lite',
      preview: 'https://github.com/elvisscochito/kanbanize-lite',
      repo: 'https://github.com/elvisscochito/kanbanize-lite',
      featured: false,
      type: tFn('Projects.projectsList.p7.type')
    },
    {
      id: 8,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Mixtli',
      title: tFn('Projects.projectsList.p8.title'),
      role: tFn('Projects.projectsList.p8.role'),
      date: tFn('Projects.projectsList.p8.date'),
      thumbnail: mixtliBanner,
      logo: mixtli,
      description: tFn('Projects.projectsList.p8.description'),
      skills: ['Python', 'Flask', 'React', 'CSS', 'Figma', 'UI/UX'],
      link: 'https://www.instagram.com/tecmixtli/',
      preview: 'https://github.com/Autonomous-Mechatronics-Grand-Prix/Cuernavaca-2024/tree/main/Mision1-Control-de-Trayectoria/cva-drone/cesar-elviss-yemi/web/frontend',
      repo: 'https://github.com/Autonomous-Mechatronics-Grand-Prix/Cuernavaca-2024/tree/main/Mision1-Control-de-Trayectoria/cva-drone/cesar-elviss-yemi/web/frontend',
      featured: true,
      type: tFn('Projects.projectsList.p8.type')
    },
    {
      id: 9,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Hit Médica',
      title: tFn('Projects.projectsList.p9.title'),
      role: tFn('Projects.projectsList.p9.role'),
      date: tFn('Projects.projectsList.p9.date'),
      thumbnail: cotizadorBanner,
      logo: bamx,
      description: tFn('Projects.projectsList.p9.description'),
      skills: ['React.js', 'CSS', 'API'],
      link: 'https://github.com/MikeDev0X/Cotizador',
      preview: 'https://github.com/MikeDev0X/Cotizador',
      repo: 'https://github.com/MikeDev0X/Cotizador',
      featured: false,
      type: tFn('Projects.projectsList.p9.type')
    },
    {
      id: 10,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Personal',
      title: tFn('Projects.projectsList.p10.title'),
      role: tFn('Projects.projectsList.p10.role'),
      date: tFn('Projects.projectsList.p10.date'),
      thumbnail: blogBanner,
      logo: bamx,
      description: tFn('Projects.projectsList.p10.description'),
      skills: ['Marked', 'Mongoose', 'Node.js', 'Express.js'],
      link: 'https://github.com/elvisscochito/projects/tree/main/markdown-blog',
      preview: 'https://github.com/elvisscochito/projects/tree/main/markdown-blog',
      repo: 'https://github.com/elvisscochito/projects/tree/main/markdown-blog',
      featured: false,
      type: tFn('Projects.projectsList.p10.type')
    },
    {
      id: 11,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Personal',
      title: tFn('Projects.projectsList.p11.title'),
      role: tFn('Projects.projectsList.p11.role'),
      date: tFn('Projects.projectsList.p11.date'),
      thumbnail: githubBanner,
      logo: bamx,
      description: tFn('Projects.projectsList.p11.description'),
      skills: ['MERN Stack', 'JWT', 'REST API'],
      link: 'https://github.com/elvisscochito/projects/tree/main/github-cards',
      preview: 'https://github-cards-rose.vercel.app',
      repo: 'https://github.com/elvisscochito/projects/tree/main/github-cards',
      featured: false,
      type: tFn('Projects.projectsList.p11.type')
    },
    {
      id: 12,
      path: [tFn('Projects.btnSwitcher.web'), tFn('Projects.btnSwitcher.all')],
      brand: 'Personal',
      title: tFn('Projects.projectsList.p12.title'),
      role: tFn('Projects.projectsList.p12.role'),
      date: tFn('Projects.projectsList.p12.date'),
      thumbnail: concertsBanner,
      logo: bamx,
      description: tFn('Projects.projectsList.p12.description'),
      skills: ['React.js', 'CSS', 'API'],
      link: 'https://github.com/elvisscochito/projects/tree/main/concert-cards',
      preview: 'https://concert-cards.vercel.app',
      repo: 'https://github.com/elvisscochito/projects/tree/main/concert-cards',
      featured: false,
      type: tFn('Projects.projectsList.p12.type')
    },
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
              <ProjectCard
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
                featured={project.featured}
                type={project.type}
              />
            ))
        }
      </div>
    </section>
  );
}

export default Projects;
