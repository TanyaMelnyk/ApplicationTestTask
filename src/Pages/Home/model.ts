import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { FoldersList } from "./types";
import { fetchTasks } from "../../Network/tasks";

export interface TasksState {
  folders: FoldersList;
  activeFolderId: number;
  activeTaskId: number;
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
    updateActiveFolderId: (state, { payload }: PayloadAction<number>) => {
      state.activeFolderId = payload;
    },
    updateActiveTaskId: (state, { payload }: PayloadAction<number>) => {
      state.activeTaskId = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
  },
});

const { actions } = tasksSlice;

export const pageMounted = () => async (dispatch: Dispatch) => {
  dispatch(actions.setLoading(true));

  try {
    const { folders } = await getFolders();

    if (folders.length) {
      const folderId = folders[0].id;
      const taskId = folders[0].tasks[0].id;

      dispatch(actions.saveFolders(folders));
      dispatch(actions.updateActiveFolderId(folderId));
      dispatch(actions.updateActiveTaskId(taskId));
    }
  } catch (e) {
    console.error("Unexpected error", e);
  }
  dispatch(actions.setLoading(false));
};

export const getFolders = async () => {
  const { folders } = await fetchTasks();
  return { folders };
};

export const updateActiveFolderId =
  (folderId: number) => (dispatch: Dispatch) => {
    dispatch(actions.updateActiveFolderId(folderId));
  };

export const updateActiveTaskId = (taskId: number) => (dispatch: Dispatch) => {
  dispatch(actions.updateActiveTaskId(taskId));
};

// Action creators are generated for each case reducer function
export const { saveFolders, setLoading } = tasksSlice.actions;

export default tasksSlice.reducer;
