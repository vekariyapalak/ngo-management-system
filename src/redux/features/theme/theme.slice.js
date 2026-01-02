import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const initialState = {
  mode: "light",
  themeColor: "zinc",
  radius: 0.5,
};

export const themePersistConfig = {
  key: "theme",
  storage,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setThemeColor(state, action) {
      state.themeColor = action.payload;
    },
    setRadius(state, action) {
      state.radius = action.payload;
    },
  },
});

export const { toggleTheme, setThemeColor, setRadius } = themeSlice.actions;

const persistedThemeReducer = persistReducer(
  themePersistConfig,
  themeSlice.reducer
);

export default persistedThemeReducer;
