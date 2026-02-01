import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearExpenses } from "../../features/expenses/expenseSlice";

export default function ExpenseFilter() {
  const filter = useSelector(state => state.expenses.filter);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex gap-2">
        {["all", "income", "expense"].map(f => (
          <button
            key={f}
            onClick={() => dispatch(setFilter(f))}
            className={`px-3 py-1 rounded ${filter === f ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <button
        onClick={() => dispatch(clearExpenses())}
        className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
      >
        Clear All
      </button>
    </div>
  );
}
