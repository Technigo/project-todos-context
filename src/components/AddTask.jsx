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
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
        className="border p-2 rounded-md w-full"
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Add
      </button>
    </form>
  );
};

export default AddTask;
