import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import clsx from "clsx";
import "./TodoTask.css";

export const TodoTask = ({ todo, index }) => {
  const todoContext = useContext(TodoContext);

  return (
    <div className={clsx("TodoTask", { "TodoTask-done": todo.done })}>
      <label className="TodoTask-label">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            todoContext.toggleTodo(index, e.target.checked);
          }}
          className="TodoTask-checkbox"
        />
        {todo.text}
      </label>
      <button
        onClick={(e) => todoContext.removeTodo(index)}
        className="TodoTask-delete"
      >
        ❌
      </button>
    </div>
  );
};
