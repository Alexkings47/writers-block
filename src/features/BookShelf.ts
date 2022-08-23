import { createSlice } from "@reduxjs/toolkit";
import { Obj } from "reselect/es/types";

const entity = "product";

type Init = {
  user: string;
  data: {};
};

const initialState: Init = {
  user: "",
  data: { user: [{ name: "", data: [] }] },
};

const bookShelfSlice = createSlice({
  name: entity,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.userName;
    },
    removeUser: (state, action) => {
      state.user = "";
    },
    updateUser: (state, action) => {
      state.user = action.payload.userName || state.user;
    },
    addBook: (state, action) => {
      state.data;
    },
    removeBook: (state, action) => {},
    finishBook: (state, action) => {},
  },
});

export const bookShelfActions = { ...bookShelfSlice.actions };
export default bookShelfSlice.reducer;
