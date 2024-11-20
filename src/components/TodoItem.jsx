//Component for single to-do, create toggle function inside here
import React from "react";
import { useTodoStore } from "../store/TodoStore";

export const TodoItem =({ id }) => {
  const todo = useTodoStore((state) => state.todos.find((todo) => todo.id === id)); //Find the specific to-do
  const toggleTodo = useTodoStore((state) => state.toggleTodo); //Access toggle function from Zustand

  //Handle checkbox toggle
  const handleCheckboxChange = () => {
    toggleTodo(id); //Toggle the to-do's completed status when checkbox is clicked
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange} //When checked or unchecked it triggers toggle
        id={`todo-${todo.id}`}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>  
    </div>
  );
};
