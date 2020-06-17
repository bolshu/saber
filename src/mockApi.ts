import { Project, CurrentTask } from './types';

const availableTasks = [
  {
    id: 'available-task-id-1',
    name: 'Add subscription',
  }, {
    id: 'available-task-id-2',
    name: 'Add item',
  }, {
    id: 'available-task-id-3',
    name: 'Send message',
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

export const generateCurrentTask = (name: string): CurrentTask => {
  if (name === 'Add subscription') {
    return {
      id: Date.now().toString(),
      name,
      status: 'Done',
    };
  } else if (name === 'Add item') {
    return {
      id: Date.now().toString(),
      name,
      status: 'InProgress',
      progress: 33,
    };
  } else {
    return {
      id: Date.now().toString(),
      name,
      status: 'Failed',
    };
  }
}