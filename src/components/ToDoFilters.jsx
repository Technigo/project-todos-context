import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

export const TodoFilters = () => {
  const { filter, setFilter } = useTodoStore();
  const isDark = useThemeStore((state) => state.isDark);

  const filters = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-start">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
            filter === value
              ? "bg-indigo-500 text-white"
              : isDark
              ? "text-gray-400 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
