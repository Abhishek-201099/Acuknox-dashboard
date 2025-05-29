import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    addWidgetToCategory(state, action) {
      const { categoryId, widgetTitle, widgetContent } = action.payload;
      const foundCategory = state.categories.find(
        (category) => category.id === categoryId,
      );
      foundCategory.widgets.push({
        id: nanoid(),
        title: widgetTitle,
        content: widgetContent,
      });
    },
    deleteWidgetFromCategory(state, action) {
      const { categoryId, widgetId } = action.payload;
      const foundCategory = state.categories.find(
        (category) => category.id === categoryId,
      );
      if (foundCategory) {
        foundCategory.widgets = foundCategory.widgets.filter(
          (widget) => widget.id !== widgetId,
        );
      }
    },
    addNewCategory(state, action) {
      const { categoryName } = action.payload;
      state.categories.push({ id: nanoid(), name: categoryName, widgets: [] });
    },
    deleteCategory(state, action) {
      const { categoryId } = action.payload;
      state.categories = state.categories.filter(
        (category) => category.id !== categoryId,
      );
    },
  },
});

export const {
  updateDashboardState,
  addWidgetToCategory,
  deleteWidgetFromCategory,
  addNewCategory,
  deleteCategory,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;

export function getCategories(state) {
  return state.dashboard.categories;
}
