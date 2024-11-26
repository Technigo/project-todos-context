import { useToDoStore } from "../stores/useToDoStore";
import { ToDoSubmit } from "./ToDoSubmit";
import { Checkbox } from "./CheckBox";
import "./ToDoCard.css";
import { BinButton } from "../ui/BinButton";
import { Headline2 } from "../ui/Typography";
import noToDoImg from "../assets/noToDoImg.png";

export const ToDoCard = () => {
  const { todos, toggleTodo } = useToDoStore();

  return (
    <>
      <div className="todo-card-container">
        <ToDoSubmit />
        {todos.length === 0 ? (
          <div className="no-projects">
            <div className="notes-image-container">
              <img src={noToDoImg} alt="No Projects" className="notes-image" />
              <Headline2>Oops, nothing here!</Headline2>
              <p>Start by typing something to add a new task</p>
            </div>
          </div>
        ) : todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div className="text-wrapper">
              <span
                className={`todo-text ${todo.completed ? "completed" : ""}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
            </div>
            <div className="card-button-container">
              <Checkbox todo={todo} />
              <BinButton todoId={todo.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};