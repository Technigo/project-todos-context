import { createContext, useState, useContext } from "react";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: "Laundry 🧺", completed: false },
    { text: "Cook 👩‍🍳", completed: false },
    { text: "Gym 🏋️‍♀️", completed: false },
  ]);

  const addTask = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const removeTask = (taskToRemove) => {
    setTodos(todos.filter((task) => task.text !== taskToRemove.text));
  };

  const toggleTodo = (index, completed) => {
    const updatedTodo = [...todos];
    updatedTodo[index].completed = completed;
    setTodos(updatedTodo);
  };

  const clearAllTask = () => {
    setTodos([]);
  };

  const appContent = {
    title: "Todo List",
    heading: "New task",
  };

  return (
    <AppDataContext.Provider
      value={{
        todos,
        addTask,
        appContent,
        removeTask,
        toggleTodo,
        clearAllTask,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);