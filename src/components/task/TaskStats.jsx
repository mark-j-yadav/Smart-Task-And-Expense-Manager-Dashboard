import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function TaskStats() {
  const tasks = useSelector(state => state.tasks.tasks);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    return {
      total,
      completed,
      pending: total - completed,
    };
  }, [tasks]);

  return (
    <div className="flex justify-around p-4 bg-gray-100 rounded-xl mb-4 text-center">
      <div>
        <p className="font-bold">{stats.total}</p>
        <p className="text-gray-500">Total</p>
      </div>
      <div>
        <p className="font-bold">{stats.completed}</p>
        <p className="text-gray-500">Completed</p>
      </div>
      <div>
        <p className="font-bold">{stats.pending}</p>
        <p className="text-gray-500">Pending</p>
      </div>
    </div>
  );
}
