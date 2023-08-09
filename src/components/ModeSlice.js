import { createSlice } from "@reduxjs/toolkit";

const mode1 = {
  darkMode: true,
  color1: "#293132",
  color2: "#B892FF",
  color3: "#17d4ca",
  color4: "#A7B2E7",
  color5: "#1DB6E0",
  photo: "https://www.placecage.com/200/300",
};

const mode2 = {
  darkMode: false,
  color1: "#233132",
  color2: "#B882FF",
  color3: "#FF78F5",
  color4: "#775599",
  color5: "#3e9a2c",
  photo: "https://placekitten.com/200/300",
};

const initialState = mode2;

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    darkMode: () => {
      return mode1;
    },
    lightMode: () => {
      return mode2;
    },
  },
});

export const { darkMode, lightMode } = modeSlice.actions;

export default modeSlice.reducer;
