import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import expenseReducer from "../features/expenses/expenseSlice";
import settingsReducer from "../features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    expenses: expenseReducer,
    settings: settingsReducer,
  },
});
