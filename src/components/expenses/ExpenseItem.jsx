import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../features/expenses/expenseSlice";
import ExpenseInput from "./ExpenseInput";

export default function ExpenseItem({ expense }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={`bg-white p-4 rounded-xl shadow hover:shadow-md transition flex justify-between items-center border-l-4 ${expense.type === "income" ? "border-green-500" : "border-red-500"}`}>
      {isEditing ? (
        <ExpenseInput edit={expense} closeEdit={() => setIsEditing(false)} />
      ) : (
        <>
          <div className="flex-1">
            <p className="font-semibold">{expense.title}</p>
            <p className="text-gray-500">{expense.type} - ₹{expense.amount}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700"
            >
              ✏️
            </button>
            <button
              onClick={() => dispatch(deleteExpense(expense.id))}
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
