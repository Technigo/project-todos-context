import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "./TodoList.css";
import { TodoTask } from "./TodoTask";

export const TodoList = () => {
  const todoContext = useContext(TodoContext);

  return (
    // here we are rendering a list dynamically (it can change)
    <ul className="TodoList">
      {todoContext.todoList.map((todo, index) => (
        <li key={index} className="TodoList-item">
          <TodoTask todo={todo} index={index} />
        </li>
      ))}
    </ul>
  );
};
