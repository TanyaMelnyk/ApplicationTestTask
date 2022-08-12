export type Task = {
  id: string;
  name: string;
  description: string;
  time: number;
  pass: string;
};

export type Folder = {
  name: string;
  id: string;
  tasks: Task[];
};

export type FoldersList = Folder[];
export type TasksList = Task[];
export type ActiveIds = {
  folderId: number;
  taskId: number;
};
