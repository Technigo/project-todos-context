import { useState } from "react";
import { useToDoContext } from "../contexts/ToDoContext";
import addIcon from "../assets/plus-blue.svg";
import "./ToDoForm.css";

export const ToDoForm = () => {
  const { addToDo } = useToDoContext();
  const [newToDo, setNewToDo] = useState({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newToDo.description) {
      addToDo(newToDo);
      setNewToDo({ description: "" });
    } else {
      alert("Please fill in the field");
    }
  };

  const handleChange = (event) => {
    setNewToDo({
      ...newToDo,
      [event.target.name]: event.target.value,
    });
  };

  return (
      <form className="add-task-form" onSubmit={handleSubmit}>
        <input
          className="add-task-input"
          type="text"
          value={newToDo.description}
          placeholder="New task"
          name="description"
          onChange={handleChange}
        />
        <img
          src={addIcon}
          alt="Add new task"
          className="add-todo-button"
          onClick={handleSubmit}
        />
      </form>
  );
};
