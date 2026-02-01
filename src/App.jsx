import { useSelector } from "react-redux";
import TaskInput from "./components/task/TaskInput";
import TaskList from "./components/task/TaskList";
import TaskFilter from "./components/task/TaskFilter";
import TaskStats from "./components/task/TaskStats";

import ExpenseInput from "./components/expenses/ExpenseInput";
import ExpenseList from "./components/expenses/ExpenseList";
import ExpenseFilter from "./components/expenses/ExpenseFilter";
import ExpenseStats from "./components/expenses/ExpenseStats";

import SettingsPanel from "./components/settings/SettingsPanel";

export default function App() {
  const theme = useSelector((state) => state.settings.theme);

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">My Dashboard</h1>

       
        <div className="max-w-4xl mx-auto mb-8">
          <SettingsPanel />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
            <TaskInput />
            <TaskFilter />
            <TaskStats />
            <TaskList />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
            <ExpenseInput />
            <ExpenseFilter />
            <ExpenseStats />
            <ExpenseList />
          </div>

        </div>
      </div>
    </div>
  );
}
