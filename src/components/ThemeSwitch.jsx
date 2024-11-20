import { useThemeStore } from "../stores/useThemeStore";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeSwitch = () => {
  // Get the current theme (light or dark) from the Zustand store
  const theme = useThemeStore((state) => state.theme);

  // Get the toggleTheme function to switch themes
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    // Button to toggle the theme
    <button
      // Apply dynamic class based on the current theme
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`relative flex items-center w-20 h-10 bg-gray-300 dark:bg-gray-800 rounded-full p-1 shadow-md transition-all duration-300 ${
        theme === "light"
          ? "bg-primary text-secondary"
          : "bg-secondary text-primary"
      }`}
    >
      <span
        className={`absolute flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          theme === "light" ? "" : "translate-x-[calc(100%+0.5rem)]"
        }`}
      >
        {theme === "light" ? (
          <FaSun className="text-yellow-500" size={20} />
        ) : (
          <FaMoon className="text-purple-900" size={20} />
        )}
      </span>

      {/* Hidden Labels for Accessibility */}
      <span className="sr-only">{`Switch to ${
        theme === "light" ? "dark" : "light"
      } mode`}</span>
    </button>
  );
};
