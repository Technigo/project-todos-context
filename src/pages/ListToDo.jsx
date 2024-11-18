import React from "react";
import cocktail from "../assets/cocktail.svg";
import { useToDos } from "../contexts/ToDoContext";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

import "./ListToDo.css";

export const ListToDo = () => {
  //useToDos from ToDoContext provides "todos" to access the list of tasks and toggleToDo for marking tasks complete
  const { todos, toggleToDo, deleteToDo, moveTaskUp, moveTaskDown } =
    useToDos();

  return (
    <section className="add-section">
      <div className="add-title">
        <h2>Your to-do list</h2>
      </div>
      <div className="add-container">
        {/* checking if tasks is available, otherwise render message */}
        {todos.length === 0 ? (
          <div className="empty-container">
            <p className="empty-text">Nothing left to do.</p>
            <p className="empty-text">Go get yourself a cocktail!</p>
            <img src={cocktail} alt="image of a cocktail" />
          </div>
        ) : (
          todos.map((todo, index) => (
            <div key={index} className="task-wrapper">
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    toggleToDo(index);
                  }}
                />
                <label className={todo.completed ? "completed" : ""}>
                  <div className="task-details">
                    <div className="task-category">{todo.category}:</div>
                    <div className="task-text">{todo.text}</div>
                    <div className="task-date">Deadline: {todo.date}</div>
                  </div>
                </label>
              </div>
              <div className="btn-group">
                <button
                  className="task-delete"
                  onClick={() => {
                    deleteToDo(index);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </button>
                <button
                  className="btn-move-up"
                  onClick={() => {
                    moveTaskUp(index);
                  }}
                  disabled={index === 0} // Disable if it's the first task
                >
                  ↑
                </button>
                <button
                  className="btn-move-down"
                  onClick={() => {
                    moveTaskDown(index);
                  }}
                  disabled={index === todos.length - 1} // Disable if it's the last task
                >
                  ↓
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="list-btn">
        <Link to="/addtodo">
          <Button />
        </Link>
      </div>
    </section>
  );
};
