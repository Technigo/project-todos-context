import { useToDoStore } from "../stores/useToDoStore";
import { ToDoSubmit } from "./ToDoSubmit";
import { Checkbox } from "./CheckBox";
import "./ToDoCard.css";
import { AddTaskButton } from "../ui/AddTaskButton";
import { BinButton } from "../ui/BinButton";
import { Headline2 } from "../ui/Typography";
import notesImage from "../assets/notes.png";

export const ToDoCard = () => {
  const { todos, toggleTodo, showForm } = useToDoStore();

  return (
    <>
      <Headline2>To-Do</Headline2>
      <div className="to-do-box">
        <AddTaskButton />
        {showForm && <ToDoSubmit />}

        <div className="todo-card-container">
          {todos.length === 0 ? (
            <div className="no-projects">
              <div className="notes-image-container">
                <img src={notesImage} alt="No Projects" className="notes-image" />
                <p>No To-Do available</p>
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
      </div>
    </>
  );
};