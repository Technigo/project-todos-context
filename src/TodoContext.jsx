import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodos] = useState([{ text: "Todo 1", done: false }]);

  const addTodo = (todo) => {
    setTodos([...todoList, { text: todo, done: false }]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todoList];
    // splice is to remove an element from an array
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // toggle means setting to on or off
  const toggleTodo = (index, done) => {
    const newTodos = [...todoList];
    newTodos[index].done = done;
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
