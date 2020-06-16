import React, {
  createContext, 
  useEffect,
  useState,
  // useCallback,
  FC,
} from 'react';

import {
  Project,
  // CurrentTask
} from './types';

import { fetchData } from './mockApi';

type ContextProps = { 
  projects: Project[];
  setProjects: (arg: Project[]) => void;
  isFetched: boolean;
  setIsFetched: (arg: boolean) => void;
  // runTask: (projectId: string, task: CurrentTask) => void;
};

export const AppContext = createContext<ContextProps>({} as ContextProps);

export const AppStore: FC = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  // const runTask = useCallback(() => {
  //   const projects = {

  //   };

  //   setProjects(projects);
  // }, []);

  useEffect(() => {
    // simulate fetch data from server
    fetchData(setProjects, setIsFetched);
  }, []);

  return (
    <AppContext.Provider
      value={{
        projects,
        setProjects,
        isFetched,
        setIsFetched,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
