import { createContext, useState, useContext } from "react";

// Create a Context
const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      description: "Wake up and stretch",
      completed: false,
    },
    {
      id: 2,
      description: "Brew a fresh cup of coffee or tea",
      completed: false,
    },
    {
      id: 3,
      description: "Take a brisk walk",
      completed: false,
    },
    {
      id: 4,
      description: "Eat some breakfast",
      completed: false,
    },
    {
      id: 5,
      description: "Pet the dog",
      completed: false,
    },
    {
      id: 6,
      description: "Get ready for the day!",
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

// Custom hook
export const useToDoContext = () => useContext(ToDoContext);
