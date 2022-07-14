import { createSlice } from "@reduxjs/toolkit";

export const chSlice = createSlice({
  name: "name",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = chSlice.actions;
