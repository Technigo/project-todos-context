import "./index.css";
import React from "react";
import { TodoList } from "./components/TodoList.jsx";
import { TodoForm } from "./components/TodoForm.jsx";
import { TodoProvider } from "./contexts/TodoContext.jsx";

export const App = () => {
  return (
    <TodoProvider>
        <div className="container">
          <h1>Todo App</h1>
          <TodoForm />
          <TodoList />
        </div>
    </TodoProvider>
  );
};

export default App;
