// Tasks.jsx

import { useTaskStore } from "../stores/useTaskStore";
import { Task } from "../components/Task";
import emptyStateImage from "../assets/empty-state.png";
import "./Tasks.css";

export const Tasks = () => {
  const tasks = useTaskStore((state) => state.tasks); // get all tasks from tasks array in Zustand

  //   return (
  //     <div>
  //       {tasks.map((_, index) => (
  //         <Task key={index} taskIndex={index} /> // Skicka endast index om det behövs
  //       ))}
  //     </div>
  //   );
  // };


  return (
    <div className="tasks-container">
      {tasks.length === 0 ? (
        // Visa bilden om inga tasks finns
        <div className="empty-state">
          <img src={emptyStateImage} alt="No tasks yet" className="empty-state-image" />
        </div>
      ) : (
        // Rendera tasks om de finns
        tasks.map((_, index) => <Task key={index} taskIndex={index} />)
      )}
    </div>
  );
};