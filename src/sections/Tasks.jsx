// Tasks.jsx

import { useTaskStore } from "../stores/useTaskStore";
import { Task } from "../components/Task";
import emptyStateImage from "../assets/empty-state.png";
import "./Tasks.css";

export const Tasks = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="tasks-container">
      {tasks.length === 0 ? (
        <div className="empty-state">
          <img
            src={emptyStateImage}
            alt="No tasks yet"
            className="empty-state-image"
          />
        </div>
      ) : (
        tasks.map((task) =>
          <Task key={task.id} task={task} />)
      )}
    </div>
  );
};
