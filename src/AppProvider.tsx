import React, {
  createContext, 
  useEffect,
  useState,
  ReactNode,
} from 'react';

import { Project } from './types';
import { fetchData, generateCurrentTask } from './mockApi';

type ContextProps = { 
  projects: Project[];
  setProjects: (arg: Project[]) => void;
  isFetched: boolean;
  setIsFetched: (arg: boolean) => void;
  runTask: (projectId: string, name: string) => void;
};

export const AppContext = createContext<ContextProps>({} as ContextProps);

type Props = {
  children?: ReactNode;
}

export const AppStore = ({ children }: Props): JSX.Element => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  const runTask = (projectId: string, name: string): void => {
    const newProjects = projects.map(project => {
      if (project.id !== projectId) return project;

      const currentTask = generateCurrentTask(name);

      project.currentTasks.push(currentTask);

      return project;
    });

    setProjects(newProjects);
  };

  useEffect(() => {
    fetchData(setProjects, setIsFetched);
  }, []);

  return (
    <AppContext.Provider
      value={{
        projects,
        setProjects,
        isFetched,
        setIsFetched,
        runTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
