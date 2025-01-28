import useTodoStore from "../store/useTodoStore";
import { format } from "date-fns";

const TodoItem = ({ task }) => {
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const removeTask = useTodoStore((state) => state.removeTask);

  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-checked={task.completed}
        />
        {/* Display Timestamp: Added a <span> to show the formatted creation date. */}
        <span className={task.completed ? "completed" : ""}>{task.title}</span>
      </label>
      <span className="timestamp" aria-label={`Created at ${task.createdAt}`}>
        {format(new Date(task.createdAt), "PPpp")}
      </span>
      <button
        onClick={() => removeTask(task.id)}
        aria-label={`Remove ${task.title}`}
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
