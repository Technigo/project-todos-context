import { ToDoCard } from "./ToDoCard";
import { useToDoContext } from "../contexts/ToDoContext";
import clearIcon from "../assets/cross-black.svg";
import "./ToDoList.css";

export const ToDoList = () => {
  const { toDos, toggleComplete, clearToDos } = useToDoContext();

  const amountOfTasks = toDos.length;

  const completedTasks = () => {
    return toDos.filter((toDo) => toDo.completed);
  };

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
      <h2>ToDo List</h2>
      <ul>
        {toDos.map((toDo, index) => (
          <ToDoCard
            key={index}
            toDo={toDo}
            toggleComplete={() => toggleComplete(index)}
          />
        ))}
      </ul>
      <button className="clear-all-button" onClick={handleClearAll}>
        <p>Clear all</p>
        <img src={clearIcon} alt="Clear icon" />
      </button>
    </div>
  );
};
