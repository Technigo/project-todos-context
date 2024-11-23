// Import specific SVG icons
import {
  CheckCircle2 as CompleteAllIcon,
  Sun as LightModeIcon,
  Moon as DarkModeIcon,
} from "lucide-react";
// Manage the state of todos and theme
import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

export const TodoActions = () => {
  // Destructure functions and values from `useTodoStore` to manage todos
  const { completeAll, getTotalTodos } = useTodoStore();
  // Destructure functions and values from `useThemeStore` to manage the theme
  const { isDark, toggleTheme } = useThemeStore();
  // Get the total number of todos
  const totalTodos = getTotalTodos();

  return (
    <div className="flex items-center gap-4">
      {/* Render the "Complete All" button only if there are todos */}
      {totalTodos > 0 && (
        <button
          // Call the `completeAll` function when the button is clicked
          onClick={completeAll}
          // Tailwind CSS classes for styling the button
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200"
        >
          {/* CheckCircle-icon for the "Complete All" action */}
          <CompleteAllIcon size={20} />
          {/* Text label for the button */}
          <span>Complete All</span>
        </button>
      )}
      {/* Button to toggle between dark and light mode */}
      <button
        // Call the `toggleTheme` function when the button is clicked
        onClick={toggleTheme}
        // Tailwind CSS classes for styling the button with conditional logic
        className={`p-2 rounded-lg transition-colors duration-200 ${
          isDark
            ? "bg-white/5 hover:bg-white/10 text-white" // Styles for dark mode
            : "bg-gray-200 hover:bg-gray-300 text-gray-700" // Styles for light mode
        }`}
        // Aria label indicating the current mode
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {/* Render the Sun icon for dark mode, Moon icon for light mode */}
        {isDark ? <LightModeIcon size={20} /> : <DarkModeIcon size={20} />}
      </button>
    </div>
  );
};
