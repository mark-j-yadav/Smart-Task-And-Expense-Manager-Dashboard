import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../features/settings/settingsSlice";

export default function LanguageSelector() {
  const language = useSelector(state => state.settings.language);
  const dispatch = useDispatch();

  return (
    <select
      value={language}
      onChange={(e) => dispatch(setLanguage(e.target.value))}
      className="px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
    </select>
  );
}
