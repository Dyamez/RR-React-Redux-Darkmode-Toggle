import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./components/ModeSlice";

export const store = configureStore({
  reducer: modeReducer,
});
