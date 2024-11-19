import { useToDoContext } from "../contexts/ToDoContext";
import removeIcon from "../assets/cross-white.svg";
import "./ToDoCard.css";

export const ToDoCard = ({ toDo, toggleComplete }) => {
  const { removeToDo } = useToDoContext();

  const handleRemove = () => {
    removeToDo(toDo.id);
  };
  return (
    <div className="to-do-list-item">
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={toDo.completed}
          onChange={toggleComplete}
        ></input>
        <span
          style={{
            textDecoration: toDo.completed ? "line-through" : "none",
            color: toDo.completed ? "#7A7777" : "inherit",
          }}
        >
          <div className="todo-text">{toDo.description}</div>
        </span>
        <span className="checkmark"></span>
      </label>

      <img
        src={removeIcon}
        alt="Remove"
        className="remove-button"
        onClick={handleRemove}
      />
    </div>
  );
};
