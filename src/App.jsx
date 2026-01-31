import TaskInput from "./components/task/TaskInput";
import TaskList from "./components/task/TaskList";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex justify-center items-center">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">
          📝 Task Manager
        </h1>

        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}
