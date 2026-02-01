import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../../features/tasks/taskSlice";

export default function TaskInput({ edit = null, closeEdit }) {
  const [text, setText] = useState(edit ? edit.title : "");
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (edit) {
      dispatch(editTask({ id: edit.id, title: text }));
      closeEdit();
    } else {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
        className="flex-1 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition"
      >
        {edit ? "Save" : "Add"}
      </button>
    </form>
  );
}
