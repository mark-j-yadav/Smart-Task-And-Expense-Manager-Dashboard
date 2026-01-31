import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../features/tasks/taskSlice";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <div
        onClick={() => dispatch(toggleTask(task.id))}
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </div>

      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="text-red-500 hover:text-red-700"
      >
        ❌
      </button>
    </div>
  );
}
