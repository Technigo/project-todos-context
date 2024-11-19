import { ToDoCard } from "./ToDoCard";
import { useToDoContext } from "../contexts/ToDoContext";
import Lottie from "lottie-react";
import wellDoneAnimation from "../animations//WellDone.json";
import clearIcon from "../assets/cross-black.svg";
import "./ToDoList.css";

export const ToDoList = () => {
  const { toDos, toggleComplete, clearToDos } = useToDoContext();

  const amountOfTasks = toDos.length;

  const completedTasks = () => {
    return toDos.filter((toDo) => toDo.completed);
  };

  const allTasksCompleted =
    completedTasks().length === amountOfTasks && amountOfTasks > 0;

  const handleClearAll = () => {
    clearToDos();
  };

  return (
    <div>
      <div className="task-amount">
        <p>
          Completed tasks: {completedTasks().length}/{amountOfTasks}
        </p>
      </div>

      {allTasksCompleted ? (
        <div className="completion-message">
          <Lottie
            animationData={wellDoneAnimation}
            style={{ width: 250, height: 200 }}
            speed={0.5}
            loop={false}
          />
          <h3>All todos are completed!</h3>
          <p> Create some more tasks, you can do it! 💪</p>
        </div>
      ) : (
        <div>
          {toDos.map((toDo, index) => (
            <ToDoCard
              key={index}
              toDo={toDo}
              toggleComplete={() => toggleComplete(index)}
            />
          ))}
        </div>
      )}
      <div className="clear-all-button-container">
        <button className="clear-all-button" onClick={handleClearAll}>
          <p>Clear all</p>
          <img src={clearIcon} alt="Clear icon" />
        </button>
      </div>
    </div>
  );
};
