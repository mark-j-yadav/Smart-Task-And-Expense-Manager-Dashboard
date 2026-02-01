import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../features/settings/settingsSlice";

export default function CurrencySelector() {
  const currency = useSelector(state => state.settings.currency);
  const dispatch = useDispatch();

  return (
    <select
      value={currency}
      onChange={(e) => dispatch(setCurrency(e.target.value))}
      className="px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="INR">INR (₹)</option>
      <option value="USD">USD ($)</option>
      <option value="EUR">EUR (€)</option>
      <option value="JPY">JPY (¥)</option>
    </select>
  );
}
