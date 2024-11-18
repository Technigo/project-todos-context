import { createContext, useState, useEffect, useContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [itemId, setItemId] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [totalChecked, setTotalChecked] = useState(0);

  const toggleTodo = (id, completed) => {
    setTodoList((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodoList((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  const addTodo = (newItem) => {
    const newId = itemId + 1;
    setItemId(newId);

    setTodoList((currentItems) => {
      return [...currentItems, { id: itemId, text: newItem, completed: false }];
    });
  };

  useEffect(() => {
    setTotalItems(todoList.length);

    const checkedCount = todoList.filter(
      (item) => item.completed === true
    ).length;
    setTotalChecked(checkedCount);
  }, [todoList]);

  const toggleAllTodos = () => {
    setTodoList((currentItems) => {
      //checks if at least one item is not completed, then negate the result. this way when we toggle button, it checks all items
      const allCompleted = !currentItems.some((item) => !item.completed);
      return currentItems.map((item) => ({
        ...item,
        completed: !allCompleted,
      }));
    });
  };

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        todoList,
        itemId,
        setItemId,
        deleteTodo,
        toggleTodo,
        totalItems,
        totalChecked,
        toggleAllTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
