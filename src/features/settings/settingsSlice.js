import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light", // light | dark
  currency: localStorage.getItem("currency") || "INR",
  language: localStorage.getItem("language") || "en", // en | hi
};

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      saveToLocalStorage("theme", state.theme);
    },
    setCurrency(state, action) {
      state.currency = action.payload;
      saveToLocalStorage("currency", state.currency);
    },
    setLanguage(state, action) {
      state.language = action.payload;
      saveToLocalStorage("language", state.language);
    },
  },
});

export const { toggleTheme, setCurrency, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
