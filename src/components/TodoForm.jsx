import { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import moment from "moment"; 
import "./TodoForm.css"

export const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!todo) return;

    addTodo({
      id: Date.now(),
      todo,
      completed: false,
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    });
    setTodo("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="text-input"
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder="Add a new task"
        />
      </form>
    </div>
  );
};
