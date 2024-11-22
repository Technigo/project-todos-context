// Tasks.jsx

import { useTaskStore } from "../stores/useTaskStore";
import { Task } from "../components/Task";
import emptyStateImage from "../assets/empty-state.png";
import "./Tasks.css";

export const Tasks = () => {
  const tasks = useTaskStore((state) => state.tasks); // get all tasks from tasks array in Zustand

  return (
    <div className="tasks-container">
      {tasks.length === 0 ? (
        // Show img if no tasks are added yet
        <div className="empty-state">
          <img
            src={emptyStateImage}
            alt="No tasks yet"
            className="empty-state-image"
          />
        </div>
      ) : (
        // Render tasks if there are any
        tasks.map((_, index) => <Task key={index} taskIndex={index} />)
      )}
    </div>
  );
};
