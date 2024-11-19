import { useState } from "react";
import { useTodo } from "../contexts/TodoContext.jsx";
import "./todo-form.css";

//Text field and handleSubmit function

export const TodoForm = () => {
  const { addTodo } = useTodo();
  const [newTodo, setNewTodo] = useState({
    todotext: "",
    id: 0,
  });

  const handleChange = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo({ todotext: "", id: newTodo.id + 1 });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="inputField"
            type="text"
            name="todotext"
            placeholder="Write your tasks here..."
            key={newTodo.id}
            value={newTodo.todotext}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="addTodo-btn">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};
