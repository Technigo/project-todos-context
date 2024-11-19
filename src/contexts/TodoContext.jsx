import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState([0]);

  const addTodo = (newTodo) => {
    setTodo((prevTodos) => [...prevTodos, newTodo]);
  };

  function removeToDo(id) {
    const removeItem = todo.filter((task) => {
      return task.id !== id;
    });
    setTodo(removeItem);
  }

  const countTasks = () => {
    setCount(function () {
      return;
    });
  };

  const clearList = () => {
    confirm(`Are you sure you want to remove all tasks from the list?`);
    setTodo([]);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        addTodo,
        clearList,
        removeToDo,
        count,
        setCount,
        countTasks,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

/* const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todo");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]); */

//spread operator for localStorage
