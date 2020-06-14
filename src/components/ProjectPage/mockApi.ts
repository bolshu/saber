import { Project } from './types';

const mockProject = (): Project => {
  return {} as Project;
};

type SetProjectCallback = (arg: Project) => void;

type SetIsFetchedCallback = (arg: boolean) => void;

export const mockApi = (setProject: SetProjectCallback, setIsFetched: SetIsFetchedCallback): void => {
  const timer = setInterval(() => {
    setProject(mockProject());
    setIsFetched(true);

    clearInterval(timer);
  }, 1500);
};
