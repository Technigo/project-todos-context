import React from "react";
// This is like the "backbone" of the app, where all the components are put together.
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { TodoProvider } from "./TodoContext";
import { TodoCount } from "./TodoCount";
import "./App.css";

export const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoCount />
        <TodoList />
      </div>
    </TodoProvider>
  );
};
