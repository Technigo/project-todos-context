import "./ClearButton.css";
import { useTask } from "../contexts/TaskContext";
import TrashCan from "../assets/trash-can.svg";

export const ClearButton = () => {
  const { clearTasks } = useTask();

  const clicked = (event) => {
    event.preventDefault();

    // Do an alert to see if the user is sure.
    if (confirm("Are you sure?")) {
      clearTasks();
    }
  };

  return (
    <button
      className="clear-button"
      id="remove-all"
      name="remove-all"
      onClick={clicked}
    >
      Clear all
      <img src={TrashCan} />
    </button>
  );
};
