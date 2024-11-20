import { useState } from "react";
import { useTaskStore } from "../store/taskStore";

const AddTask = () => {
  const [taskText, setTaskText] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim()) {
      addTask(taskText); // Add the new task to the list
      setTaskText(""); // Clear input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full flex gap-2">
      {/* Input Field */}
      <input
        type="text"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        className="w-full rounded-full border border-gray-300 p-3 focus:outline-none focus:ring focus:ring-pink-500 h-12 pr-16" // Add padding-right for space
        placeholder="What to do?"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white rounded-full px-6 h-12 text-sm font-medium transition-all hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default AddTask;
