import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

export const SingleTodo = ({ task }) => {
  const [checkmark, setCheckmark] = useState(false);
  const { removeToDo } = useTodo();

  const toggleCheckbox = (event) => {
    setCheckmark(event.target.checked);
  };

  const handleRemoveTask = (event) => {
    removeToDo(event);
  };

  return (
    <div className="task" key={task.id}>
      <div className="taskbox">
        {" "}
        <input
          className="checkbox"
          type="checkbox"
          key={task.id}
          checked={task.checkmark}
          onChange={toggleCheckbox}
        ></input>
        <label className="todotext">{task.todotext}</label>
      </div>
      <div>
        {" "}
        <button
          className="delete-btn-task"
          type="button"
          onClick={() => handleRemoveTask(task.id)}
        >
          🗑️
        </button>
      </div>{" "}
    </div>
  );
};
