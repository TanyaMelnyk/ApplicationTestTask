import { FoldersList } from "../Pages/Home/types";

export const normalizeDataFolders = (data: any): FoldersList => {
  if (!data) return;
  const foldersList = Object.values(data);
  return foldersList.map((item: any) => {
    if (item.tasks) {
      const tasks = Object.values(item.tasks);
      return { ...item, tasks };
    }
    return { ...item };
  });
};
