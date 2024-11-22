import React from "react";
import { Check, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

export const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodoStore();
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div
      className={`group flex items-center gap-3 p-4 rounded-lg transition-all duration-200 ${
        isDark
          ? "bg-white/5 border border-white/10 hover:border-white/20"
          : "bg-white border border-gray-200 hover:border-gray-300 shadow-sm"
      }`}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
          todo.completed
            ? "bg-indigo-500 border-indigo-500"
            : "border-gray-400 hover:border-indigo-500"
        }`}
        aria-label={`Mark todo as ${
          todo.completed ? "incomplete" : "complete"
        }`}
      >
        {todo.completed && <Check size={14} className="text-white" />}
      </button>
      <div className="flex-1">
        <span
          className={`block text-lg ${
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
        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-all duration-200"
        aria-label="Delete todo"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};
