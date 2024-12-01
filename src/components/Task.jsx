// Task.jsx

import { useTaskStore } from "../stores/useTaskStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import "./Task.css";

export const Task = ({ task }) => {
  const { id, text, completed } = task;
  const removeTask = useTaskStore((state) => state.removeTask);
  const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);

  return (
    <div className="task-container">
      <form>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleTaskCompletion(id)}
          />
          <span className="checkmark"></span>
        </label>
      </form>
      <p className={`task-text ${completed ? "completed" : ""}`}>{text}</p>
      <button
        className="remove-btn"
        aria-label="delete"
        onClick={() => removeTask(id)}
      >
        <FontAwesomeIcon icon={faCircleMinus} className="remove-icon" />
      </button>
    </div>
  );
};
