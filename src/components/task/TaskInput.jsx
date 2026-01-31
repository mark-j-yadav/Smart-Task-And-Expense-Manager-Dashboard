import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";

export default function TaskInput() {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (!text.trim()) return;
    dispatch(addTask(text));
    setText("");
    inputRef.current.focus();
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
        className="flex-1 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={submitHandler}
        className="bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </div>
  );
}
