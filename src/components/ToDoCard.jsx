import { useToDoStore } from "../stores/useToDoStore";
import { ToDoSubmit } from "./ToDoSubmit";
import "./ToDoCard.css";

export const ToDoCard = () => {
  const { todos, removeTodo, toggleTodo, showForm, toggleForm } = useToDoStore();

  return (
    <div>
      <button onClick={toggleForm}>
        {showForm ? "Cancel" : "Add Task"}
      </button>
      {showForm && <ToDoSubmit closeForm={toggleForm} />}

      <div className="todo-card-container">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
