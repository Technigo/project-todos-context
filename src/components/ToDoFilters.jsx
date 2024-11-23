import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

export const TodoFilters = () => {
  // Destructure `filter` and `setFilter` from `useTodoStore` to manage the current filter state
  const { filter, setFilter } = useTodoStore();
  // Use `useThemeStore` to check if the current theme is dark mode
  const isDark = useThemeStore((state) => state.isDark);
  // Array of filters with values and labels for rendering buttons
  const filters = [
    { value: "all", label: "All" }, // Filter for all todos
    { value: "active", label: "Active" }, // Filter for active todos
    { value: "completed", label: "Completed" }, // Filter for completed todos
  ];

  return (
    <div className="flex gap-2">
      {/* Map over the `filters` array to dynamically generate filter buttons */}
      {filters.map(({ value, label }) => (
        <button
          key={value} // Unique key for each button to avoid React warnings
          onClick={() => setFilter(value)} // Call `setFilter` with the selected filter value
          className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
            filter === value // Highlight the currently selected filter
              ? "bg-indigo-500 text-white" // Styles for the active filter
              : isDark // Conditional styling for dark mode
              ? "text-gray-400 hover:text-white" // Dark mode: light gray text, hover to white
              : "text-gray-600 hover:text-gray-900" // Light mode: dark gray text, hover to darker gray
          }`}
        >
          {/* Display the label for the filter (e.g., "All", "Active", "Completed") */}
          {label}
        </button>
      ))}
    </div>
  );
};
