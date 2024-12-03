import { Check, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

// Define the shape of a Todo item
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string | number | Date; // TypeScript recognizes multiple valid date types
}

// Props for the TodoItem component
interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodoStore();
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div
      className={`group flex items-center gap-3 p-3 sm:p-4 rounded-lg transition-all duration-200 ${
        isDark
          ? "bg-white/5 border border-white/10 hover:border-white/20"
          : "bg-white border border-gray-200 hover:border-gray-300 shadow-sm"
      }`}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
          todo.completed
            ? "bg-indigo-700 border-indigo-700"
            : "border-gray-500 hover:border-indigo-800"
        }`}
        aria-label={`Mark todo as ${
          todo.completed ? "incomplete" : "complete"
        }`}
      >
        {todo.completed && (
          <Check size={12} className="sm:w-4 sm:h-4 text-white" />
        )}
      </button>
      <div className="flex-1 min-w-0">
        <span
          className={`block text-base sm:text-lg truncate ${
            todo.completed
              ? isDark
                ? "text-gray-400"
                : "text-gray-400"
              : isDark
              ? "text-white"
              : "text-gray-900"
          } ${todo.completed ? "line-through" : ""}`}
        >
          {todo.text}
        </span>
        <span
          className={`text-xs ${isDark ? "text-gray-500" : "text-gray-600"}`}
        >
          Created {formatDistanceToNow(new Date(todo.createdAt))} ago
        </span>
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-all duration-200 sm:relative"
        aria-label="Delete todo"
      >
        <Trash2 size={18} className="sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};
