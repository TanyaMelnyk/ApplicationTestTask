import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Pages/Home/model";
import authReducer from "./Authorization/model";

export const store = configureStore({
  reducer: {
    taskManager: tasksReducer,
    authorization: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
