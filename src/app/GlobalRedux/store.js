"use client";

import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Features/menu/menuSlice";

export const store = configureStore({
  reducer: {
    toggleMenu: menuReducer,
  },
});
