import { createContext } from 'react';

/* simple context to share projectsButtons and handler with ProjectSwitcher */
export const ProjectsContext = createContext(null);

/*
 * Simple context to share projectsButtons, handler and other project-related
 * values with `ProjectSwitcher` and other components.
 * Provide a safe default shape to avoid consumers having to null-check.
 */
/* export const ProjectsContext = createContext({
  projectsButtons: [],
  handleProjectsSwitch: () => { },
  activeButton: null,
  projects: [],
}); */

export default ProjectsContext;
