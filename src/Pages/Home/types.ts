export type Task = {
  name: string;
  description: string;
  time: number;
};

type Folders = {
  name: string;
  id: number;
  tasks: Task[];
};

export type FoldersList = Folders[];
