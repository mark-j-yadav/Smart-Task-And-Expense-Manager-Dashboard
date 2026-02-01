import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearCompleted } from "../../features/tasks/taskSlice";

export default function TaskFilter() {
  const filter = useSelector(state => state.tasks.filter);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex gap-2">
        {["all", "completed", "pending"].map(f => (
          <button
            key={f}
            onClick={() => dispatch(setFilter(f))}
            className={`px-3 py-1 rounded ${
              filter === f ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <button
        onClick={() => dispatch(clearCompleted())}
        className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
      >
        Clear Completed
      </button>
    </div>
  );
}
