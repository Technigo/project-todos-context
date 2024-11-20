// Task.jsx

import { useTaskStore } from "../stores/useTaskStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import "./Task.css";

export const Task = ({ taskIndex }) => {
  const task = useTaskStore((state) => state.tasks[taskIndex]); // Hämta task direkt
  const removeTask = useTaskStore((state) => state.removeTask); // Ta bort task
  const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);
  const completedTasks = useTaskStore((state) => state.completedTasks);

  const isCompleted = completedTasks.includes(taskIndex);

  return (
    <div className="task-container">
      <form>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => toggleTaskCompletion(taskIndex)}
          />
          <span className="checkmark"></span>
        </label>
      </form>
      <p className="task-text">
        {task}
      </p> {/* Visa task-text direkt */}
      <button
        className="remove-btn"
        onClick={() => removeTask(taskIndex)}
      >
        <FontAwesomeIcon icon={faCircleMinus} className="remove-icon" />
      </button>
    </div>
  );
};
