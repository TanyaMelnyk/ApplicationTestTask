import { getDatabase, ref, update, get, remove } from "firebase/database";
import { Folder, FoldersList, Task } from "../Pages/Home/types";

export const sendFolderData = async (userId: string, folder: Folder) => {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId + "/folders");

  await update(reference, {
    [folder.id]: folder,
  });
};
export const sendTaskData = async (
  userId: string,
  folderId: string,
  task: Task
) => {
  const db = getDatabase();
  const reference = ref(db, `users/${userId}/folders/${folderId}/tasks`);

  await update(reference, {
    [task.id]: task,
  });
};

export const fetchTaskData = async (
  userId: string,
  folderId: string,
  taskId: string
) => {
  const db = getDatabase();
  const reference = ref(
    db,
    `users/${userId}/folders/${folderId}/tasks/${taskId}`
  );
  await remove(reference);
};

export const readUserData = async (userId: string): Promise<FoldersList> => {
  const db = getDatabase();
  const starCountRef = await get(ref(db, "users/" + userId + "/folders"));
  console.log(starCountRef.val());

  return starCountRef.val();
};
