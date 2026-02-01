import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addExpense, editExpense } from "../../features/expenses/expenseSlice";

export default function ExpenseInput({ edit = null, closeEdit }) {
  const [title, setTitle] = useState(edit ? edit.title : "");
  const [amount, setAmount] = useState(edit ? edit.amount : "");
  const [type, setType] = useState(edit ? edit.type : "expense");
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount) return;

    if (edit) {
      dispatch(editExpense({ id: edit.id, title, amount, type }));
      closeEdit();
    } else {
      dispatch(addExpense({ title, amount, type }));
      setTitle("");
      setAmount("");
      setType("expense");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <input
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
      >
        {edit ? "Save" : "Add"}
      </button>
    </form>
  );
}
