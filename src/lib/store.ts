import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog";
import userReducer from "./features/user";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
