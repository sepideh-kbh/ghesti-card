import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./action";

const initialState = {
  loading: false,
  hasError: false,
  data: {}
};

const users = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.data = action.payload.values;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.values;
    },
  },
});

export const usersList = users.reducer;