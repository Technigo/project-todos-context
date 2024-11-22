// NewTaskInput.jsx

import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "./NewTaskInput.css";

export const NewTaskInput = () => {
  const [inputValue, setInputValue] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue); // Add a task in Zustand
      setInputValue(""); // clean input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="new-task"
        placeholder="Add new task here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update inputValue state
      />
      <button type="submit" className="add-btn" aria-label="add">
        <FontAwesomeIcon icon={faCirclePlus} className="add-icon" />
      </button>
    </form>
  );
};
