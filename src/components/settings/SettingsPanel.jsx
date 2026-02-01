import { useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import CurrencySelector from "./CurrencySelector";
import LanguageSelector from "./LanguageSelector";

export default function SettingsPanel() {
  const theme = useSelector((state) => state.settings.theme);
  const currency = useSelector((state) => state.settings.currency);
  const language = useSelector((state) => state.settings.language);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Settings
      </h2>

      {/* Theme */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700 dark:text-gray-200 font-medium">Theme</span>
        <ThemeToggle />
      </div>

      {/* Currency */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700 dark:text-gray-200 font-medium">Currency</span>
        <CurrencySelector />
      </div>

      {/* Language */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700 dark:text-gray-200 font-medium">Language</span>
        <LanguageSelector />
      </div>

      {/* Display Current Settings */}
      <div className="mt-6 p-4 bg-gray-200 dark:bg-gray-800 rounded-xl text-gray-800 dark:text-gray-200">
        <p>
          <strong>Current Theme:</strong> {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </p>
        <p>
          <strong>Current Currency:</strong> {currency}
        </p>
        <p>
          <strong>Current Language:</strong> {language.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
