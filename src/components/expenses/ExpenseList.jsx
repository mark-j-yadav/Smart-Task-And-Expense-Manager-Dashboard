import { useSelector } from "react-redux";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const expenses = useSelector(state => state.expenses.expenses);
  const filter = useSelector(state => state.expenses.filter);

  const filteredExpenses = filter === "all"
    ? expenses
    : expenses.filter(e => e.type === filter);

  if (filteredExpenses.length === 0)
    return <p className="text-center text-gray-400">No expenses yet</p>;

  return (
    <div className="space-y-3">
      {filteredExpenses.map(exp => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </div>
  );
}
