import { Project } from './ProjectList';

const projects: Project[] = [
  {
    id: 'project-id-1',
    name: 'Will Rock',
  }, {
    id: 'project-id-2',
    name:'Call of Cthulhu',
  }, {
    id: 'project-id-3',
    name: 'Snowrunner'
  }, {
    id: 'project-id-4',
    name: `The Witcher 3: Wild Hunt. Switch edition`
  }, {
    id: 'project-id-5',
    name: 'Quake Champions'
  }
];

type SetProjectsCallback = (arg: Project[]) => void;

type SetIsFetchedCallback = (arg: boolean) => void;

export const mockApi = (setProjects: SetProjectsCallback, setIsFetched: SetIsFetchedCallback): void => {
  const timer = setInterval(() => {
    setProjects(projects);
    setIsFetched(true);

    clearInterval(timer);
  }, 1000);
};
