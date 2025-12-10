import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full border border-white/20 dark:border-black/20 bg-white/5 dark:bg-black/5 backdrop-blur-md hover:scale-110 transition-all shadow-lg"
    >
      {theme === "light" ? (
        <FiMoon size={18} className="text-amber-400" />
      ) : (
        <FiSun size={18} className="text-amber-400" />
      )}
    </button>
  );
}
