type TaskFromList = {
  id: string;
  name: string;
};

export type Project = {
  id: string;
  name: string;
  availableTasks: TaskFromList[];
  runningTasks: TaskFromList[];
};
