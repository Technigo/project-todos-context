import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

export const TodoInput = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const isDark = useThemeStore((state) => state.isDark);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className={`w-full px-4 py-3 pr-12 rounded-lg transition-all duration-200 ${
            isDark
              ? "bg-white/5 border border-white/10 focus:border-indigo-500 text-white placeholder-gray-400"
              : "bg-white border border-gray-300 focus:border-indigo-500 text-gray-900 placeholder-gray-500"
          } focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 outline-none`}
          aria-label="New todo input"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-500 hover:text-indigo-400 transition-colors duration-200"
          aria-label="Add todo"
        >
          <PlusCircle size={24} />
        </button>
      </div>
    </form>
  );
};
