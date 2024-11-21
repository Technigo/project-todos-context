import { create } from "zustand";
import { persist } from "zustand/middleware";

// persist is a wrapper function that ensures the state is saved to a persistent storage
export const useToDoStore = create(
  persist((set, get) => ({
    todos: [],
    showForm: false,

    addTodo: (text) => {
      const newTodo = {
        id: get().todos.length > 0 ? get().todos[get().todos.length - 1].id + 1 : 1,
        text,
        completed: false,
      };
      set((state) => ({
        todos: [...state.todos, newTodo]
      }));
    },

    removeTodo: (id) => {
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
      }));
    },

    toggleTodo: (id) => {
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      }));
    },

    toggleForm: () => {
      set((state) => ({ showForm: !state.showForm }));
    },

    closeForm: () => {
      set({ showForm: false });
    },

    getNumber: () => get().todos.length,
  }),
    {
      name: "todo-storage",
      getStorage: () => localStorage,
    }
  )
);
