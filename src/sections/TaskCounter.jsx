// TaskCounter.jsx

import { useTaskStore } from "../stores/useTaskStore";
import "./TaskCounter.css"

export const TaskCounter = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const completedTasks = useTaskStore((state) => state.completedTasks);

  return (
    <div className="task-counter-container">
      <h3>
        Completed: {completedTasks.length}/{tasks.length}
      </h3>
    </div>
  );
};