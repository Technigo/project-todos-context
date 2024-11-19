import { useToDoItem } from "../stores/useToDoItem";
import { ToDoInput } from "./ToDoInput";
import "./ToDoCard.css";

export const ToDoCard = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useToDoItem()

  const handleAdd = () => {
    const todoText = prompt("Enter a new to-do:");
    if (todoText) {
      addTodo(todoText);
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ToDoInput onAdd={addTodo} />

      <ul className="todo-card-container">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};