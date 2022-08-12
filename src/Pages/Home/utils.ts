import { FoldersList } from "./types";

export const getActiveFolder = (
  folders: FoldersList,
  activeFolderId: string
) => {
  if (activeFolderId && folders) {
    return folders.find((item) => item.id === activeFolderId);
  } else return null;
};

export const getActiveTask = (
  folders: FoldersList,
  activeFolderId: string,
  activeTaskId: string
) => {
  const activeFolder = getActiveFolder(folders, activeFolderId);
  if (activeFolder && activeFolder.tasks) {
    return activeFolder.tasks.find((item) => item.id === activeTaskId);
  } else return null;
};
