import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/settings/settingsSlice";

export default function ThemeToggle() {
  const theme = useSelector(state => state.settings.theme);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
}
