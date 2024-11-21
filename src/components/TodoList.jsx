//List that shows all of the created to do's/tasks
import React from "react";
import { useTodoStore } from "../store/TodoStore";
import { TodoItem } from "../components/TodoItem";
import thumbIcon from "../assets/thumbIcon.png";
import waitIcon from "../assets/waitIcon.png";
import "../components/TodoList.css";

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos); //Access the list of to-do's from Zustand

  //Separate completed and incomplete to-do's
  const completedTodos = todos.filter((todo) => todo.completed);
  const incompleteTodos = todos.filter((todo) => !todo.completed);


  return (
      <div className="tasks-container">
        {/* Incomplete Tasks */}
        <div className="incomplete-tasks-container">
          <h2>
            Incomplete Tasks
            <img src={waitIcon} alt="hourglass" className="wait-icon" />
          </h2>
          {incompleteTodos.length === 0 ? (
            <p>Hurray, you've completed all your to-do's!</p>
          ) : (
            incompleteTodos.map((todo) => <TodoItem key={todo.id} id={todo.id} />)
          )}
        </div>

        <div className="completed-tasks-container">
          {/* Completed Tasks */}
          <h2>
            Completed Tasks 
            <img src={thumbIcon} alt="thumbs up" className="thumb-icon" /> 
          </h2>
          {completedTodos.length === 0 ? (
            // Why is the text below in the paragraph not showing on the site?
            <p>No completed to-do's yet but you're doing great!</p>
          ) : (
            completedTodos.map((todo) => <TodoItem key={todo.id} id={todo.id} />)
          )}
        </div>
      </div>
  );
};
