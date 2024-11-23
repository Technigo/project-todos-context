import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

export const TodoInput = () => {
  // Local state to track the current input value
  const [text, setText] = useState("");
  // Get the `addTodo` function from `useTodoStore` to add new todos
  const addTodo = useTodoStore((state) => state.addTodo);
  // Get the `isDark` value from `useThemeStore` to determine the current theme
  const isDark = useThemeStore((state) => state.isDark);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    if (text.trim()) {
      addTodo(text.trim()); // Add the new todo, trimming any extra whitespace
      setText(""); // Clear the input field after adding the todo
    }
  };

  return (
    // Form container with responsive width settings
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      {/* Wrapper for input and button with relative positioning */}
      <div className="relative">
        {/* Input field for adding a new todo */}
        <input
          type="text" // Input type is `text`
          value={text} // Controlled component, value is bound to `text` state
          onChange={(e) => setText(e.target.value)} // Update `text` state on user input
          placeholder="Add a new task..." // Placeholder text for the input field
          className={`w-full px-4 py-3 pr-12 rounded-lg transition-all duration-200 ${
            isDark // Conditional styling based on the theme
              ? "bg-white/5 border border-white/10 focus:border-indigo-500 text-white placeholder-gray-400"
              : "bg-white border border-gray-300 focus:border-indigo-500 text-gray-900 placeholder-gray-500"
          } focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 outline-none`}
          aria-label="New todo input"
        />
        {/* Submit button (PlusCircle) styling */}
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-500 hover:text-indigo-400 transition-colors duration-200"
          aria-label="Add todo"
        >
          {/* Icon for the submit button */}
          <PlusCircle size={24} />
        </button>
      </div>
    </form>
  );
};
