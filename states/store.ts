import { configureStore } from "@reduxjs/toolkit";
import stateManagement from "states/state_management/slice";

export const store = configureStore({
  reducer: {
    reduxStateManagement: stateManagement,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
