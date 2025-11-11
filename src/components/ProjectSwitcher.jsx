import React, { useContext } from 'react';
import { ProjectsContext } from '../contexts/ProjectsContext';
import styles from '../styles/Projects.module.css';
import { shortLabelFromPath } from '../utils/shortLabel';

const ProjectSwitcher = () => {
  const { projectsButtons, handleProjectsSwitch } = useContext(ProjectsContext);

  return (
    <div className={styles.projectSwitcher}>
      {
        projectsButtons.map((button, index) => {
          const shortLabel = shortLabelFromPath(button.path);

          /* const shortLabel = button.path */
          // remove common suffixes (case-insensitive) to produce a short label
          /* .replace(/\s+dev$/i, '')
          .replace(/\s+science$/i, '')
          .trim(); */

          return (
            <React.Fragment key={button.id}>
              <button
                data-short={shortLabel}
                className={`${styles.projectsBtn} ${button.active ? styles.activeButton : styles.inactiveButton}`}
                onClick={() => handleProjectsSwitch(button.id)}
              >
                {button.path}{/* show full label on desktop; mobile will use data-short via CSS */}
                {/* .split(' ')[0]} */}{/* remove last word */}
              </button>
              {
                index < projectsButtons.length - 1 && <span className={styles.separator}></span>
              }
            </React.Fragment>
          );
        })}
    </div>
  )
}

export default ProjectSwitcher;
