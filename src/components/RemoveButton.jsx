import "./RemoveButton.css";
import { useTask } from "../contexts/TaskContext";
import TrashCan from "../assets/trash-can.svg";

export const RemoveButton = ({ todo }) => {
  const { removeTask } = useTask();

  const clicked = (e) => {
    e.preventDefault();

    //remove task from taskData
    removeTask(todo.id);
  };

  return (
    <button
      className="remove-button"
      id={todo.id}
      name="remove"
      onClick={clicked}
    >
      <img src={TrashCan} />
    </button>
  );
};
