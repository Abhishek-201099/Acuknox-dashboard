import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./src/features/Dashboard/dashboardSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

export default store;
