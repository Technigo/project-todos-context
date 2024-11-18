import { useTodo } from "../context/TodoContext";
import moment from "moment";
import "./TodoList.css";

export const TodoList = () => {
  const {
    todoList,
    deleteTodo,
    toggleTodo,
    totalItems,
    totalChecked,
    toggleAllTodos,
  } = useTodo();

  return (
    <div className="todo-list-container">
      <h2>To do list:</h2>
      {totalItems === 0 ? "🎉" :
        <p>
        Completed: {totalChecked} / {totalItems}
      </p>}

      <ul className="todo-ul">
        {todoList.map((item) => {
          return (
            <li className="todo-li" key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => toggleTodo(item.id, e.target.checked)}
              />
              <label
                className="span-todo"
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </label>
              <div className="time-delete-row">
                <span className="span-time">
                  on {moment(item.createdAt).format("HH:mm")}
                </span>
                <button
                  className="delete-button"
                  onClick={() => deleteTodo(item.id)}
                >
                  x
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {todoList.length === 0 ? (
        ""
      ) : (
        <button onClick={toggleAllTodos} className="toggle-button">
          {totalChecked === totalItems ? "Uncheck All" : "Check All"}
        </button>
      )}
    </div>
  );
};
