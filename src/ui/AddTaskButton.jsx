import "./AddTaskButton.css";
import { useToDoStore } from "../stores/useToDoStore";

export const AddTaskButton = () => {
    const { showForm, toggleForm } = useToDoStore();
    return (
        <button onClick={toggleForm} className="add-task-button">
            {showForm ? "Close" : "Add Task"}
        </button>
    )
}