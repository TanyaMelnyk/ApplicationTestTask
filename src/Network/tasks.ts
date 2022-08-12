import { FoldersList } from "../Pages/Home/types";
import { readUserData } from "./firebaseData";

export const fetchTasks = async (uid: string): Promise<FoldersList> => {
  const data = await readUserData(uid);

  console.log(data);
  return data;
};
