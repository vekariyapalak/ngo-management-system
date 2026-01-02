import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  isOpen: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleOpen, setIsOpen } = sidebarSlice.actions;

export const selectSidebarState = (state) => state.sidebar;
export const selectOpenState = (state) => state.sidebar.isOpen;
export const selectGetOpenState = (state) => {
  const { isOpen } = state.sidebar;
  return isOpen;
};

export const sidebarPersistConfig = {
  key: "sidebar",
  storage,
};

const persistedSidebarReducer = persistReducer(
  sidebarPersistConfig,
  sidebarSlice.reducer
);

export default persistedSidebarReducer;
