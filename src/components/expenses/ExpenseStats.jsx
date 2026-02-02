// import { useSelector } from "react-redux";
// import { useMemo } from "react";

// export default function ExpenseStats() {
//   const expenses = useSelector(state => state.expenses.expenses);

//   const stats = useMemo(() => {
//     const income = expenses.filter(e => e.type === "income").reduce((a,b)=>a+b.amount,0);
//     const expense = expenses.filter(e => e.type === "expense").reduce((a,b)=>a+b.amount,0);
//     return { income, expense, balance: income - expense };
//   }, [expenses]);

//   return (
//     <div className="flex justify-around p-4 bg-gray-100 rounded-xl mb-4 text-center">
//       <div>
//         <p className="font-bold text-green-600">₹{stats.income}</p>
//         <p className="text-gray-500">Income</p>
//       </div>
//       <div>
//         <p className="font-bold text-red-600">₹{stats.expense}</p>
//         <p className="text-gray-500">Expense</p>
//       </div>
//       <div>
//         <p className="font-bold">{stats.balance}</p>
//         <p className="text-gray-500">Balance</p>
//       </div>
//     </div>
//   );
// }


import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/formatCurrency";

export default function ExpenseStats() {
  const expenses = useSelector(state => state.expenses.expenses);
  const currency = useSelector(state => state.settings.currency);

  const income = expenses
    .filter(e => e.type === "income")
    .reduce((a,b) => a + Number(b.amount), 0);

  const expense = expenses
    .filter(e => e.type === "expense")
    .reduce((a,b) => a + Number(b.amount), 0);

  return (
    <div className="mt-4 space-y-1">
      <p>Income: {formatCurrency(income, currency)}</p>
      <p>Expense: {formatCurrency(expense, currency)}</p>
      <p>Balance: {formatCurrency(income - expense, currency)}</p>
    </div>
  );
}
