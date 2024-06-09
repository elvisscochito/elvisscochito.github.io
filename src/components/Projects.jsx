import { useState } from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const [projectsButtons, setProjectsButtons] = useState([
    {
      id: 1,
      name: 'Web dev',
      active: true
    },
    {
      id: 2,
      name: 'Mobile dev',
      active: false
    },
    {
      id: 3,
      name: 'Game dev',
      active: false
    },
    {
      id: 4,
      name: 'Data science',
      active: false
    }
  ]);

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
                {button.name}
              </button>
              {
                index < projectsButtons.length - 1 && <span className={styles.separator}></span>
              }
            </>
          ))
        }
      </div>
    </section>
  );
}

export default Projects;
