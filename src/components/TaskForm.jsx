import { useState } from "react";
import { useTask } from "../context/TaskContext";
import "../styling/TaskForm.css";
import AddButton from "../assets/Rectangle 2.png";

const TaskForm = () => {
  const [text, setText] = useState("");
  const { addTask } = useTask();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Add new Task</h2>
      <form onSubmit={handleSubmit} className="addTaskForm">
        <input
          type="text"
          placeholder="Add new task"
          value={text}
          onChange={handleChange}
          className="formText"
        />
        <button type="submit" className="formButton">
          <img src={AddButton} alt="Add task button" />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
