import { create } from "zustand";

/* 
CODE BEFORE TYPESCRIPT

const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (text) =>
      set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false }],
      })),
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      })),
    deleteTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
  })); 
  
  */


  // into typescript
  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface TodoStore {
    todos: Todo[]; 
    addTodo: (text: string) => void; 
    toggleTodo: (id: number) => void; 
    deleteTodo: (id: number) => void; 
  }


  const useTodoStore = create<TodoStore>((set) => {
    // Load todos from localStorage on initialization
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  
    return {
      todos: savedTodos,
      addTodo: (text) => {
        set((state) => {
          const newTodos = [
            ...state.todos,
            { id: Date.now(), text, completed: false },
          ];
          // Save updated todos to localStorage
          localStorage.setItem("todos", JSON.stringify(newTodos));
          return { todos: newTodos };
        });
      },
      toggleTodo: (id) => {
        set((state) => {
          const updatedTodos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
          localStorage.setItem("todos", JSON.stringify(updatedTodos));
          return { todos: updatedTodos };
        });
      },
      deleteTodo: (id) => {
        set((state) => {
          const filteredTodos = state.todos.filter((todo) => todo.id !== id);
          localStorage.setItem("todos", JSON.stringify(filteredTodos));
          return { todos: filteredTodos };
        });
      },
    };
  });  
  

export default useTodoStore;