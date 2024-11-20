import React from "react";
import { Header } from "./components/Header.jsx"
import { TodoForm } from "./components/TodoForm.jsx";
import { TodoList } from "./components/TodoList.jsx";


export const App = () => {
  return (
    <div>
    <Header />
    <TodoForm />
    <TodoList />
    </div>
  );
};
