import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { Folder, FoldersList, Task } from "./types";
import { fetchTasks } from "../../Network/tasks";
import { normalizeDataFolders } from "../../helpers/normalizers";
import {
  sendRemovedData,
  sendFolderData,
  sendPasswordData,
  sendTaskData,
} from "../../Network/firebaseData";
import { getRandomString } from "../../helpers/string";

const md5 = require("md5");

export interface TasksState {
  folders: FoldersList;
  activeFolderId: string;
  activeTaskId: string;
  isLoading: boolean;
}

const initialState: TasksState = {
  folders: [],
  activeFolderId: null,
  activeTaskId: null,
  isLoading: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    saveFolders: (state, { payload }: PayloadAction<FoldersList>) => {
      state.folders = payload;
    },
    updateActiveFolderId: (state, { payload }: PayloadAction<string>) => {
      state.activeFolderId = payload;
    },
    updateActiveTaskId: (state, { payload }: PayloadAction<string>) => {
      state.activeTaskId = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
  },
});

const { actions } = tasksSlice;

export const getFolders =
  (userId: string, isUpdate = false) =>
  async (dispatch: Dispatch) => {
    dispatch(actions.setLoading(true));

    try {
      const folders = await fetchTasks(userId);
      const foldersList = normalizeDataFolders(folders);

      if (foldersList.length) {
        dispatch(actions.saveFolders(foldersList));
        if (!isUpdate) {
          //set first folder and task open by default
          dispatch(actions.updateActiveFolderId(foldersList[0].id));
          if (foldersList[0].tasks) {
            dispatch(actions.updateActiveTaskId(foldersList[0].tasks[0].id));
          }
        }
      }
    } catch (e) {
      console.error("Unexpected error", e);
    }
    dispatch(actions.setLoading(false));
  };

export const updateActiveFolderId =
  (folderId: string) => (dispatch: Dispatch) => {
    dispatch(actions.updateActiveFolderId(folderId));
  };

export const updateActiveTaskId = (taskId: string) => (dispatch: Dispatch) => {
  dispatch(actions.updateActiveTaskId(taskId));
};

export const updateFolderData =
  (userId: string) => async (dispatch: Dispatch<any>) => {
    const id = getRandomString(3);
    const folderData: Folder = {
      id,
      name: `Folder_${id}`,
      tasks: [],
    };
    await sendFolderData(userId, folderData);

    dispatch(getFolders(userId, true));
  };

export const updateTaskData =
  (userId: string, folderId: string) => async (dispatch: Dispatch<any>) => {
    const id = getRandomString(4);
    const taskData: Task = {
      id,
      name: `Task_${id}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut fermentum nibh. Vestibulum pharetra dui porta tellus suscipit mattis. Sed at porttitor tortor, tempor scelerisque libero. Fusce mauris ex, auctor non nisi nec, pellentesque bibendum sapien. Fusce consequat finibus orci id pulvinar. Morbi laoreet velit in tellus tincidunt malesuada",
      pass: "",
      time: new Date().getTime(),
    };
    await sendTaskData(userId, folderId, taskData);

    dispatch(getFolders(userId, true));
  };

export const updatePassword =
  (userId: string, folderId: string, taskId: string, password: string) =>
  async (dispatch: Dispatch<any>) => {
    await sendPasswordData(userId, folderId, taskId, md5(password));
    dispatch(getFolders(userId, true));
  };

export const removeTaskData =
  (userId: string, folderId: string, taskId: string) =>
  async (dispatch: Dispatch<any>) => {
    console.log(userId, taskId);
    await sendRemovedData(userId, folderId, taskId);

    dispatch(getFolders(userId, true));
  };

export const { setLoading } = tasksSlice.actions;

export default tasksSlice.reducer;
