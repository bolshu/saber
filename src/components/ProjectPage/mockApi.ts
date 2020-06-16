import {
  AvailableTask,
  CurrentTask,
  Project,
} from './types';

const availableTasks: AvailableTask[] = [
  {
    id: 'available-task-id-1',
    name: 'Add item',
  }, {
    id: 'available-task-id-2',
    name: 'Add subscription',
  }, {
    id: 'available-task-id-3',
    name: 'Send message',
  }, {
    id: 'available-task-id-4',
    name: 'Push notification',
  },
];

const currentTasks: CurrentTask[] = [
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

const project: Project = {
  id: 'project-id',
  name: 'Will Rock',
  availableTasks,
  currentTasks,
};

type SetProjectCallback = (arg: Project) => void;

type SetIsFetchedCallback = (arg: boolean) => void;

export const mockProject = (setProject: SetProjectCallback, setIsFetched: SetIsFetchedCallback): void => {
  const timer = setInterval(() => {
    setProject(project);
    setIsFetched(true);

    clearInterval(timer);
  }, 100);
};
