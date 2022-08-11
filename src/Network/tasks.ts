import { FoldersList } from "../Pages/Home/types";

const tasks = [
  { id: 894, name: "task1", description: "text", time: 1660075944351 },
  {
    id: 127,
    name: "task2",
    description: "text text text text text text text text text text",
    time: 1660076166722,
  },
];
const foldersList: FoldersList = [
  { name: "Folder1", id: 1, tasks },
  {
    name: "Folder2",
    id: 2,
    tasks: [
      { id: 456, name: "task1", description: "text", time: 1660076196967 },
    ],
  },
  { name: "Test", id: 3, tasks: [] },
];
type MockDataType = {
  folders: FoldersList;
};

export const fetchTasks = (): Promise<MockDataType> => {
  const MockData: MockDataType = { folders: foldersList };

  return new Promise((resolve) => resolve(MockData));
};
