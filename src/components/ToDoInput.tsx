import { useState, FormEvent, ChangeEvent } from "react";
import { PlusCircle } from "lucide-react";
import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

export const TodoInput = () => {
  const [text, setText] = useState<string>(""); // State for the input text
  const addTodo = useTodoStore((state) => state.addTodo); // Add todo action
  const isDark = useThemeStore((state) => state.isDark); // Theme state

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText(""); // Clear input after submission
    }
  };

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Add a new task..."
          className={`w-full px-4 py-2 sm:py-3 pr-12 rounded-lg transition-all duration-200 text-sm sm:text-base ${
            isDark
              ? "bg-gray-800 border border-gray-700 focus:border-indigo-500 text-white placeholder-gray-400"
              : "bg-white border border-gray-300 focus:border-indigo-700 text-gray-900 placeholder-gray-500"
          } focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 outline-none`}
          aria-label="New todo input"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-700 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200"
          aria-label="Add todo"
        >
          <PlusCircle size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </form>
  );
};
