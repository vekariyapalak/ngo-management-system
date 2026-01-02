import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "../reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();