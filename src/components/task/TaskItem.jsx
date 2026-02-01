import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../features/tasks/taskSlice";
import TaskInput from "./TaskInput";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition flex justify-between items-center">
      {isEditing ? (
        <TaskInput edit={task} closeEdit={() => setIsEditing(false)} />
      ) : (
        <>
          <span
            onClick={() => dispatch(toggleTask(task.id))}
            className={`cursor-pointer flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}
          >
            {task.title}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700"
            >
              ✏️
            </button>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </div>
        </>
      )}
    </div>
  );
}
