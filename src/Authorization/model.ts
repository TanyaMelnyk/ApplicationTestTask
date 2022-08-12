import { createSlice } from "@reduxjs/toolkit";
import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  userId: string | null;
}

const initialState: AuthState = {
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserId: (state, { payload }: PayloadAction<string | null>) => {
      state.userId = payload;
    },
  },
});

const { actions } = authSlice;

export const updateUserId = (userId: string | null) => (dispatch: Dispatch) => {
  dispatch(actions.saveUserId(userId));
};

// Action creators are generated for each case reducer function
export const { saveUserId } = authSlice.actions;

export default authSlice.reducer;
