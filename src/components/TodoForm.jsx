//Component to create new to-do/task
import React from "react";
import { useState } from "react";
import { useTodoStore } from "../store/TodoStore.jsx"; //It's working even though it's a red underline, not to self

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Create a new To-Do:</label>
      <input
        id="todoInput"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="What do you need to do?"
        />
        <button type="submit">Add your To-Do</button>
    </form>
  );
};
