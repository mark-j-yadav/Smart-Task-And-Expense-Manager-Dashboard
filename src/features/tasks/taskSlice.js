import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: "all", // all | completed | pending
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
        saveToLocalStorage(state.tasks);
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
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
      saveToLocalStorage(state.tasks);
    },
    editTask(state, action) {
      const { id, title } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) task.title = title;
      saveToLocalStorage(state.tasks);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
      saveToLocalStorage(state.tasks);
    },
    clearCompleted(state) {
      state.tasks = state.tasks.filter(t => !t.completed);
      saveToLocalStorage(state.tasks);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const {
  addTask,
  toggleTask,
  editTask,
  deleteTask,
  clearCompleted,
  setFilter,
} = taskSlice.actions;
export default taskSlice.reducer;
