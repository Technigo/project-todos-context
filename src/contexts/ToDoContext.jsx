import { createContext, useContext, useState, useEffect } from "react";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  //uselocalStorage to save the task
  const [todos, setTodos] = useState(() => {
    const localtodos = localStorage.getItem("todos");
    return localtodos ? JSON.parse(localtodos) : [];
  });

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const categories = [
    { value: "Work", label: "Work" },
    { value: "Home", label: "Home" },
    { value: "Shopping", label: "Shopping" },
    { value: "Study", label: "Study" },
    { value: "Travel", label: "Travel" },
  ];
  //function to add a todo with text, date, category.
  //creates a new todo objecte with additional properties (completed, time and completedAt)
  const addToDo = (text, date, category) => {
    const newToDo = {
      text,
      completed: false,
      date, //pass chosen date
      category,
      time: new Date(),
    };
    setTodos([...todos, newToDo]);
  };

  //function to iterate through the todos list using map. Creates a new object with completed state flipped and sets completedAt if the task is marked complete
  const toggleToDo = (index) => {
    const newToDo = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: !todo.completed,
          completedAt: !todo.completed ? new Date().toISOString() : null,
        };
      }
      return todo;
    });
    setTodos(newToDo);
  };

  const deleteToDo = (index) => {
    const newToDo = todos.filter((_, i) => i !== index);
    setTodos(newToDo);
    localStorage.setItem("todos", JSON.stringify(newToDo));
  };

  const moveTaskUp = (index) => {
    if (index === 0) return; // Can't move the first task up
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[index - 1];
    newTodos[index - 1] = temp;
    setTodos(newTodos);
  };

  const moveTaskDown = (index) => {
    if (index === todos.length - 1) return; // Can't move the last task down
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[index + 1];
    newTodos[index + 1] = temp;
    setTodos(newTodos);
  };

  //calculate total number of tasks
  const totalToDos = todos.length;

  //calculate remaining tasks
  const doneToDos = todos.filter((todo) => todo.completed).length;

  return (
    <ToDoContext.Provider
      value={{
        todos,
        addToDo,
        toggleToDo,
        categories,
        deleteToDo,
        moveTaskUp,
        moveTaskDown,
        totalToDos,
        doneToDos,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDos = () => {
  const context = useContext(ToDoContext);

  return context;
};
