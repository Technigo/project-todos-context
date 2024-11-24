import { useState } from "react";
import { useTaskStore } from "../store/taskStore";

const AddTask = () => {
  const [taskText, setTaskText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const addTask = useTaskStore((state) => state.addTask);

  const handleChange = (event) => {
    const text = event.target.value;
    setTaskText(text);
    setCharCount(text.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
      setCharCount(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full flex flex-col gap-2">
      <div className="relative w-full">
        <input
          type="text"
          value={taskText}
          onChange={handleChange}
          className="w-full rounded-full border border-pink-500 p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 h-12 pr-16"
          placeholder="What to do?"
          maxLength={40}
        />
        <button
          type="submit"
          aria-label="Add task"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-sm font-medium transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-700 focus:scale-95 hover:bg-white hover:shadow-none hover:border-2 hover:border-pink-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:stroke-pink-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      <div className="text-sm text-gray-600 mx-2">
        {charCount} / 40
      </div>
    </form>
  );
};

export default AddTask;
