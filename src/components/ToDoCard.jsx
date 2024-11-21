import { useToDoStore } from "../stores/useToDoStore";
import { ToDoSubmit } from "./ToDoSubmit";
import { Checkbox } from "./CheckBox";
import "./ToDoCard.css";
import { AddTaskButton } from "../ui/AddTaskButton";
import { BinButton } from "../ui/BinButton";

export const ToDoCard = () => {
  const { todos, removeTodo, toggleTodo, showForm, toggleForm } = useToDoStore();

  return (
    <div className="to-do-box">
      <AddTaskButton />
      {showForm && <ToDoSubmit />}

      <div className="todo-card-container">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">

            <span
              className={`todo-text ${todo.completed ? "completed" : ""}`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <div className="card-button-container">
              <Checkbox todo={todo} />
              <BinButton todoId={todo.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};