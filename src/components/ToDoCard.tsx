import { useToDoStore } from "../stores/useToDoStore";
import { useThemeStore } from "../stores/useThemeStore";
import { ToDoSubmit } from "./ToDoSubmit";
import { Checkbox } from "./CheckBox";
import { BinButton } from "../ui/BinButton";
import { BodyText, Headline2 } from "../ui/Typography";
import "./ToDoCard.css";
import noToDoImg from "../assets/noToDoImg.png";


export const ToDoCard = () => {
  const { todos, toggleTodo } = useToDoStore();
  const { getNumber, getToDoFinished } = useToDoStore()
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const completedTasks = getToDoFinished().length;

  return (
    <>
      <div className={`todo-card-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
        <ToDoSubmit />
        {todos.length === 0 ? (
          <div className="no-projects">
            <div className="notes-image-container">
              <img src={noToDoImg} alt="No Projects" className="notes-image" />
              <Headline2>Oops, nothing here!</Headline2>
              <BodyText>Start by typing something to add a new task</BodyText>
            </div>
          </div>
        ) : (
          <>
            <Headline2>To-Do</Headline2>
            <BodyText>Total tasks: {getNumber()} | Completed tasks: {completedTasks}</BodyText>
            {todos.map((todo) => (
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
          </>
        )}
      </div>
    </>
  );
};
