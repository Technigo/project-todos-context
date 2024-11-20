import { useToDoStore } from "../stores/useToDoStore";
import { ToDoSubmit } from "./ToDoSubmit";
import { Checkbox } from "./CheckBox";
import "./ToDoCard.css";
import { AddTaskButton } from "../ui/AddTaskButton";

export const ToDoCard = () => {
  const { todos, removeTodo, toggleTodo, showForm, toggleForm } = useToDoStore();

  return (
    <div>
      <AddTaskButton />
      {showForm && <ToDoSubmit />}

      <div className="todo-card-container">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">

            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <div className="card-button-container">
              <Checkbox todo={todo} />
              <img
                src="./assets/bin.png"
                alt="Delete"
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={() => removeTodo(todo.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


