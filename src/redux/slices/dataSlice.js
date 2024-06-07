import { createSlice } from "@reduxjs/toolkit";
import { fetchInitialData } from "../../utils";

let initialState = [];

const initializeState = async () => {
  initialState = await fetchInitialData();
};

// Initialize the state before creating the slice
initializeState();

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => action.payload,
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
