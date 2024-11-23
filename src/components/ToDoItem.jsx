import { Check, Trash2 } from "lucide-react";
// `formatDistanceToNow` from date-fns for calculating relative time (e.g "2 hours ago")
import { formatDistanceToNow } from "date-fns";
import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

// Define the `TodoItem` functional component, which takes a `todo` object as a prop
export const TodoItem = ({ todo }) => {
  // Extract `toggleTodo` (mark a todo as completed/active) and `removeTodo` (delete a todo) from the todo store.
  const { toggleTodo, removeTodo } = useTodoStore();
  // Retrieve the `isDark` state from the theme store to determine if the app is in dark mode.
  const isDark = useThemeStore((state) => state.isDark);

  return (
    // Container for the todo item, styled dynamically based on the theme (dark or light)
    <div
      className={`group flex items-center gap-3 p-4 rounded-lg transition-all duration-200 ${
        isDark
          ? "bg-white/5 border border-white/10 hover:border-white/20" // Dark mode styles
          : "bg-white border border-gray-200 hover:border-gray-300 shadow-sm" // Light mode styles
      }`}
    >
      {/* Button to toggle the completion state of the todo */}
      <button
        onClick={() => toggleTodo(todo.id)} // Call `toggleTodo` with the todo's ID
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
          todo.completed
            ? "bg-indigo-500 border-indigo-500" // Completed todo: Indigo background and border
            : "border-gray-400 hover:border-indigo-500" // Incomplete todo: Gray border with hover effect
        }`}
        // Aria label describing the current state and the action performed
        aria-label={`Mark todo as ${
          todo.completed ? "incomplete" : "complete"
        }`}
      >
        {" "}
        {/* Render the `Check` icon only if the todo is completed */}
        {todo.completed && <Check size={14} className="text-white" />}
      </button>
      {/* Main content area for the todo */}
      <div className="flex-1">
        {/* Display the todo's text with dynamic styling based on its completion status and the theme */}
        <span
          className={`block text-lg ${
            todo.completed
              ? isDark
                ? "text-gray-400" // Completed todo in dark mode: Gray text
                : "text-gray-400" // Completed todo in light mode: Gray text
              : isDark
              ? "text-white" // Incomplete todo in dark mode: White text
              : "text-gray-900" // Incomplete todo in light mode: Dark gray text
            // Add a strikethrough effect if the todo is completed
          } ${todo.completed ? "line-through" : ""}`}
        >
          {/* Render the todo text */}
          {todo.text}
        </span>
        {/* Display the relative creation time using `formatDistanceToNow` */}
        <span
          // Style the timestamp text based on the theme
          className={`text-xs ${isDark ? "text-gray-500" : "text-gray-600"}`}
        >
          Created {formatDistanceToNow(new Date(todo.createdAt))} ago
        </span>
      </div>
      {/* Button to delete the todo */}
      <button
        // Call `removeTodo` with the todo's ID
        onClick={() => removeTodo(todo.id)}
        // Initially hidden (`opacity-0`), becomes visible on hover (`group-hover:opacity-100`)
        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-all duration-200"
        aria-label="Delete todo"
      >
        <Trash2 size={20} />
        {/* Trash icon for the delete button */}
      </button>
    </div>
  );
};
