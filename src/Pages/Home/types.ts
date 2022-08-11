export type Content = {
  id: number;
  name: string;
  description: string;
  time: number;
  active?: boolean;
};

type Task = {
  name: string;
  id: number;
  tasks: Content[];
  active?: boolean;
};

export type FoldersList = Task[];
export type TasksList = Content[];
export type ActiveIds = {
  folderId: number;
  taskId: number;
};
