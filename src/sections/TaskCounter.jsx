// TaskCounter.jsx

import { useTaskStore } from "../stores/useTaskStore";
import "./TaskCounter.css"

export const TaskCounter = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="task-counter-container">
      <h2>
        Completed: {completedTasksCount}/{tasks.length}
      </h2>
    </div>
  );
};
