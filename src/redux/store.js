import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./slices/inputSlice";
import dataReducer from "./slices/dataSlice";

export const store = configureStore({
  reducer: {
    input: inputReducer,
    data: dataReducer,
  },
});
