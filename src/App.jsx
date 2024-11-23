import React from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { useTodoStore } from "./store/todoStore";
import "./App.css";

export const App = () => {
  const todos = useTodoStore((state) => state.todos);
  const totalTasks = todos.length;
  const uncompletedTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <main className="app-container">
      <h1>TaskMaster</h1>
      <TaskInput />
      <section className="task-count">
        <p>Total Tasks: {totalTasks}</p>
        <p>Uncompleted Tasks: {uncompletedTasks}</p>
      </section>
      <TaskList />
    </main>
  );
};

export default App;
