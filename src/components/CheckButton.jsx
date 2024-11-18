import "./CheckButton.css";
import { useTask } from "../contexts/TaskContext";

export const CheckButton = ({ todo }) => {
  const { completeTask } = useTask();

  const clicked = () => {
    completeTask(todo.id);
  };

  return (
    <form className="todo-form">
      <input
        className={todo.complete ? "egg complete" : "egg"}
        checked={todo.complete}
        type="checkbox"
        id={todo.id}
        name="task-check"
        onChange={clicked}
      ></input>
      <label className="egg" htmlFor={todo.id}>
        {todo.title}
      </label>
    </form>
  );
};
