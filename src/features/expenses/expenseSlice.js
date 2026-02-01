import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  expenses: JSON.parse(localStorage.getItem("expenses")) || [],
  filter: "all", // all | income | expense
};

const saveToLocalStorage = (expenses) => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: {
      reducer(state, action) {
        state.expenses.push(action.payload);
        saveToLocalStorage(state.expenses);
      },
      prepare({ title, amount, type }) {
        return {
          payload: {
            id: nanoid(),
            title,
            amount: Number(amount),
            type, // 'income' or 'expense'
            date: new Date().toISOString(),
          },
        };
      },
    },
    editExpense(state, action) {
      const { id, title, amount, type } = action.payload;
      const expense = state.expenses.find(e => e.id === id);
      if (expense) {
        expense.title = title;
        expense.amount = Number(amount);
        expense.type = type;
      }
      saveToLocalStorage(state.expenses);
    },
    deleteExpense(state, action) {
      state.expenses = state.expenses.filter(e => e.id !== action.payload);
      saveToLocalStorage(state.expenses);
    },
    clearExpenses(state) {
      state.expenses = [];
      saveToLocalStorage(state.expenses);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addExpense, editExpense, deleteExpense, clearExpenses, setFilter } = expenseSlice.actions;
export default expenseSlice.reducer;
