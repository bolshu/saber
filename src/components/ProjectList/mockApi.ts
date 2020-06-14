import { Project } from './ProjectList';

const mockProjects = (count = 5): Project[] => {
  const projects = [];

  for (let i = 1; i <= count; i++) {
    projects.push({
      id: `project-id-${i}`,
      name: `Project: ${i}`
    });
  }
  return projects;
};

type SetProjectsCallback = (arg: Project[]) => void;

type SetIsFetchedCallback = (arg: boolean) => void;

export const mockApi = (setProjects: SetProjectsCallback, setIsFetched: SetIsFetchedCallback, count?: number): void => {
  const timer = setInterval(() => {
    setProjects(mockProjects(count));
    setIsFetched(true);

    clearInterval(timer);
  }, 1500);
};
