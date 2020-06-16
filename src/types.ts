type Id = string;
type Name = string;

export type AvailableTask = {
  id: Id;
  name: Name;
}

type Uid = string;
export type Status = 'InProgress' | 'Done' | 'Failed';
type Progress = number; // 0 to 100

export type CurrentTask = {
  id: Uid;
  name: Name;
  status: Status;
  progress?: Progress;
};

export type Project = {
  id: string;
  name: string;
  availableTasks: AvailableTask[];
  currentTasks: CurrentTask[];
};
