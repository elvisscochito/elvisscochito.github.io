import { useState } from 'react';
import a3e from '../assets/a3e.webp';
import amazon from '../assets/amazon.svg';
import bamx from '../assets/bamx.webp';
import danu from '../assets/danu.png';
import kanbanize from '../assets/kanbanize.png';
import wizeline from '../assets/wizeline.svg';
import Card from '../components/Card';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const [projectsButtons, setProjectsButtons] = useState([
    {
      id: 1,
      path: 'Web dev',
      active: true
    },
    {
      id: 2,
      path: 'Mobile dev',
      active: false
    },
    {
      id: 3,
      path: 'Game dev',
      active: false
    },
    {
      id: 4,
      path: 'Data science',
      active: false
    }
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      path: 'Web dev',
      title: 'Red BAMX - Food bank system · Front-end Developer',
      date: 'Aug 2022 - Oct 2022',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      brand: bamx,
      description: '• Improved manual processes by building a modern and robust system. Designed both mobile and web application mockups in Figma. Developed the frontend of the web application using React.js and CSS.',
      link: 'https://bamx.org.mx',
      preview: 'https://bamx.org.mx',
      repo: 'https://github.com/Ant20ni02/banco-de-alimentos'
    },
    {
      id: 2,
      path: 'Web dev',
      title: 'Wizeline - Wizeprompt · Front-end Developer',
      date: 'Sep 2023 - Dec 2023',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      brand: wizeline,
      description: '• Designed and developed an intuitive and easy to use internal platform for employee developers to access AI-powered conversations.',
      link: 'https://www.wizeline.com/',
      preview: 'https://bamx.org.mx',
      repo: 'https://github.com/wizelineacademy/itesm-socioformador-ago-dec-2023-team-03'
    },
    {
      id: 3,
      path: 'Web dev',
      title: 'A3E Ingenieros - Meetings rooms app • Full-stack Developer',
      date: 'Aug 2023 - Sep 2023',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      brand: a3e,
      description: '• Designed and developed a full stack web application to facilitate meeting scheduling using MongoDB, Express.js, Node.js and React.js (MERN stack).',
      link: 'https://www.a3eingenieros.com.mx',
      preview: 'https://meeting-rooms-app.vercel.app',
      repo: 'https://github.com/elvisscochito/meeting-rooms-app'
    },
    {
      id: 4,
      path: 'Mobile dev',
      title: 'myCover App - iOS development application · Mobile Developer',
      date: 'Nov 2023 - Present',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      brand: bamx,
      description: '• Designed and developed an intuitive mobile application using Apple technologies to easily create, share and save unique, personalized digital tickets for any social event directly to the pre-installed Apple “Wallet" app.',
      link: 'https://github.com/elvisscochito/mycover-app',
      preview: 'https://github.com/elvisscochito/mycover-app',
      repo: 'https://github.com/elvisscochito/mycover-app'
    },
    {
      id: 5,
      path: 'Data science',
      title: 'Danu Analitica - Data analytics dashboard · Data Scientist and Front-end Developer',
      date: 'Aug 2024 - Dec 2024',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      brand: danu,
      description: '• Analyzed and cleaned a provided database to integrate and display the data models in charts through an user-friendly web interface.',
      link: 'https://github.com/elvisscochito/data-analytics-dashboard',
      preview: 'https://danu-data-analytics-dashboard.streamlit.app',
      repo: 'https://github.com/elvisscochito/data-analytics-dashboard'
    },
    {
      id: 6,
      path: 'Game dev',
      title: 'Amazon - Puzzle videogame · Game Developer and Front-end Developer',
      date: 'Feb 2022 - Jun 2022',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      brand: amazon,
      description: '• Created a puzzle video game using the Unity game engine and metaverse technologies to improve ADHD, and designed and developed a web interface to manage user video game statistics.',
      link: 'https://github.com/elvisscochito/projects/tree/main/escaperoom',
      preview: 'https://github.com/elvisscochito/projects/tree/main/escaperoom',
      repo: 'https://github.com/elvisscochito/projects/tree/main/escaperoom'
    },
    {
      id: 7,
      path: 'Web dev',
      title: 'Kanbanize - Kanbanize Lite · Full-Stack Developer',
      date: 'Feb 2023 - Jun 2023',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      brand: kanbanize,
      description: '• Created a puzzle video game using the Unity game engine and metaverse technologies to improve ADHD, and designed and developed a web interface to manage user video game statistics.',
      link: 'https://github.com/elvisscochito/kanbanize-lite',
      preview: 'https://github.com/elvisscochito/kanbanize-lite',
      repo: 'https://github.com/elvisscochito/kanbanize-lite'
    }
  ])

  /* const buttonStyles = (active) => {
    return {
      color: active ? '#333' : '#999',
    }
  } */

  const handleProjectsSwitch = (id) => {
    setProjectsButtons(projectsButtons.map(button => ({
      ...button,
      active: button.id === id
    })));
  }

  const activeButton = projectsButtons.find(button => button.active);

  return (
    <section id="projects">
      <header className={styles.header}>
        <h2 className={styles.h2}>Beyond skills.</h2>
        <span>Here's some of my best projects yet where I applied my skills.</span>
      </header>

      <div className={styles.projectSwitcher}>
        {
          projectsButtons.map((button, index) => (
            <>
              <button
                key={button.id}
                className={`${styles.projectsBtn} ${button.active ? styles.activeButton : styles.inactiveButton}`}
                onClick={() => handleProjectsSwitch(button.id)}
              >
                {button.path}
              </button>
              {
                index < projectsButtons.length - 1 && <span className={styles.separator}></span>
              }
            </>
          ))
        }
      </div>
      <div className={styles.projectsContainer}>
        {
          projects
            .filter(project => project.path === activeButton.path)
            .map(project => (
              <Card
                key={project.id}
                title={project.title}
                date={project.date}
                thumbnail={project.thumbnail}
                brand={project.brand}
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
