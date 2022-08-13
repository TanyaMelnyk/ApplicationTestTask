import { FoldersList } from "../Pages/Home/types";
import { readUserData } from "./firebaseData";

export const fetchTasks = async (uid: string): Promise<FoldersList> => {
  return await readUserData(uid);
};
