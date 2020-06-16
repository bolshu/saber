import { Project } from './types';

const availableTasks = [
  {
    id: 'current-task-id-like-uid-1',
    name: 'Send message',
    status: 'Done',
  }, {
    id: 'current-task-id-like-uid-2',
    name: 'Add item',
    status: 'InProgress',
    progress: 33,
  }, {
    id: 'current-task-id-like-uid-3',
    name: 'Send message',
    status: 'Failed',
  },
];

const projects: Project[] = [
  {
    id: 'project-id-1',
    name: 'Will Rock',
    availableTasks,
    currentTasks: [],
  }, {
    id: 'project-id-2',
    name:'Call of Cthulhu',
    availableTasks,
    currentTasks: [],
  }, {
    id: 'project-id-3',
    name: 'Snowrunner',
    availableTasks,
    currentTasks: [],
  }
];

type SetProjectsCallback = (arg: Project[]) => void;

type SetIsFetchedCallback = (arg: boolean) => void;

export const fetchData = (setProjects: SetProjectsCallback, setIsFetched: SetIsFetchedCallback): void => {
  const timer = setInterval(() => {
    setProjects(projects);
    setIsFetched(true);
    console.log('fetched')
    clearInterval(timer);
  }, 1000);
};
