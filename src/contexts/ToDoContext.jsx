import { createContext, useState, useContext } from "react";

// Create a Context
const ToDoContext = createContext();

// Custom hook
export const useToDoContext = () => useContext(ToDoContext);

export const ToDoProvider = ({ children }) => {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      description: "Buy vegetables",
      completed: false,
    },
    {
      id: 2,
      description: "Pay bills",
      completed: false,
    },
    {
      id: 3,
      description: "Pet the dog",
      completed: false,
    },
  ]);

  // Function to toggle the completed status of a task
  const toggleComplete = (index) => {
    const updatedToDos = [...toDos];
    updatedToDos[index].completed = !updatedToDos[index].completed;
    setToDos(updatedToDos);
  };

  // Function to add new task to todo-list
  const addToDo = (newToDo) => {
    setToDos((prevToDos) => [
      ...prevToDos,
      {
        id: toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 1, // Generate the next available numerical id
        ...newToDo,
      },
    ]);
  };

  // Function to remove task from todo-list
  const removeToDo = (id) => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  };

  //Function to clear all tasks from todo-list
  const clearToDos = () => {
    setToDos([]);
  };

  return (
    //Provide the context value, which contains the data we want to share, to the children
    <ToDoContext.Provider
      value={{
        toDos,
        setToDos,
        toggleComplete,
        addToDo,
        removeToDo,
        clearToDos,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
