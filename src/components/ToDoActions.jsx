import React from "react";
import { CheckCircle2, Sun, Moon } from "lucide-react";
import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

export const TodoActions = () => {
  const { completeAll, getTotalTodos } = useTodoStore();
  const { isDark, toggleTheme } = useThemeStore();
  const totalTodos = getTotalTodos();

  return (
    <div className="flex items-center gap-4">
      {totalTodos > 0 && (
        <button
          onClick={completeAll}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200"
        >
          <CheckCircle2 size={20} />
          <span>Complete All</span>
        </button>
      )}
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-lg transition-colors duration-200 ${
          isDark
            ? "bg-white/5 hover:bg-white/10 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-700"
        }`}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};
