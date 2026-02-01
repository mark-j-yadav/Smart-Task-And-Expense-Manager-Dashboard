import { useState, useDeferredValue, useMemo } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  const filteredTasks = useMemo(() => {
    let result = tasks;
    if (filter === "completed") result = tasks.filter(t => t.completed);
    if (filter === "pending") result = tasks.filter(t => !t.completed);
    if (deferredSearch) {
      result = result.filter(t =>
        t.title.toLowerCase().includes(deferredSearch.toLowerCase())
      );
    }
    return result;
  }, [tasks, filter, deferredSearch]);

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
        className="w-full px-4 py-3 rounded-xl border mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-400">No tasks found</p>
      ) : (
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </>
  );
}
