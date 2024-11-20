// Tasks.jsx

import { useTaskStore } from "../stores/useTaskStore";
import { Task } from "../components/Task";

export const Tasks = () => {
  const tasks = useTaskStore((state) => state.tasks); // get all tasks from tasks array in Zustand

  return (
    <div>
      {tasks.map((_, index) => (
        <Task key={index} taskIndex={index} /> // Skicka endast index om det behövs
      ))}
    </div>
  );
};