import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "./TodoCount.css";

export const TodoCount = () => {
  const todoContext = useContext(TodoContext);
  const done = todoContext.todoList.filter((todo) => todo.done == true).length;
  const notDone = todoContext.todoList.filter(
    // this is where we count how many tasks thats left
    (todo) => todo.done == false
  ).length;

  return (
    <div className="TodoCount">
      {notDone} todos left ({done} completed)
    </div>
  );
};
