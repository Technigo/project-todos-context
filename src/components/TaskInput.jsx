import "./TaskInput.css";
import { useState } from "react";
import { useTask } from "../contexts/TaskContext";

import moment from "moment";

export const TaskInput = () => {
  const { addTask } = useTask();

  //create "unique" id to keep between list moves.
  const [newTask, setNewTask] = useState({
    id: "id" + Math.random().toString(16).slice(2),
    title: "",
    complete: false,
    date: moment().calendar(),
  });

  // 
  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTask.title) {
      addTask(newTask);
      setNewTask({
        id: "id" + Math.random().toString(16).slice(2),
        title: "",
        complete: false,
        date: moment().calendar(),
      });
    } else {
      alert("Please fill in all the fields");
    }
  };
  return (
    <>
      <form className="task-input" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="task-input"
          placeholder="Add task..."
          value={newTask.title}
          onChange={handleChange}
        />
      </form>
    </>
  );
};
