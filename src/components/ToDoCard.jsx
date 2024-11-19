import { useToDoItem } from "../stores/useToDoItem";
import { ToDoInput } from "./ToDoInput";

export const ToDoCard = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useToDoItem()

  const handleAdd = () => {
    const todoText = prompt("Enter a new to-do:");
    if (todoText) {
      addTodo(todoText);
    }
  };

  return (
    <div className="todo-card-container">
      <h2>To-Do List</h2>
      <ToDoInput onAdd={addTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};