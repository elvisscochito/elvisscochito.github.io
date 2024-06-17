import { useState } from 'react';
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
      title: 'Wizeline',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://www.wizeline.com/',
      repo: 'https://github.com/elvisscochito'
    },
    {
      id: 2,
      title: 'Wizeline',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://www.wizeline.com/',
      repo: 'https://github.com/elvisscochito'
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
          projects.map(project => (
            <Card key={project.id} title={project.title} thumbnail={project.thumbnail} link={project.link} repo={project.repo} />
          ))
        }
      </div>
    </section>
  );
}

export default Projects;
