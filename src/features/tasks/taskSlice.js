import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem("tasks", JSON.stringify(state));
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    toggleTask(state, action) {
      const task = state.find(t => t.id === action.payload);
      task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask(state, action) {
      const newState = state.filter(t => t.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
