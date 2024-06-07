import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    setInput: (state, action) => action.payload,
  },
});

export const { setInput } = inputSlice.actions;

export default inputSlice.reducer;
