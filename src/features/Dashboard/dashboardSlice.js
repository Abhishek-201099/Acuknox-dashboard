import { createSlice } from "@reduxjs/toolkit";

const initialDashboardState = {
  categories: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers: {
    updateDashboardState(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { updateDashboardState } = dashboardSlice.actions;

export default dashboardSlice.reducer;

export function getCategories(state) {
  return state.dashboard.categories;
}
