//Component to create new tasks

import React from "react";
import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import "../components/TodoForm.css";

export const TodoForm = () => {
  const [input, setInput] = useState(""); //Local state for the input
  const addTodo = useTodoStore((state) => state.addTodo); //Access Zustand function

  //Handle input submission
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; //No empty to-do's
    addTodo(input); //Add the new to-do to the store 
    setInput(""); //Clear the input
  };

  return (
    <div className="new-task-wrapper">
      <div className="new-task-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="todoInput">New task:</label>
            <input 
              id="todoInput"
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Write something here" className="textfield"
              />
              <button className="add-task-button" type="submit">Add task</button>
            </div>
        </form>
      </div>
    </div>
  );
};
