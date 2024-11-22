import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [],
      filter: "all",
      addTodo: (text) => {
        const newTodo = {
          id: crypto.randomUUID(),
          text,
          completed: false,
          createdAt: new Date(),
        };
        set((state) => ({ todos: [newTodo, ...state.todos] }));
      },
      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      removeTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      completeAll: () => {
        set((state) => ({
          todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        }));
      },
      setFilter: (filter) => {
        set({ filter });
      },
      getTotalTodos: () => get().todos.length,
      getCompletedTodos: () =>
        get().todos.filter((todo) => todo.completed).length,
      getFilteredTodos: () => {
        const { todos, filter } = get();
        switch (filter) {
          case "active":
            return todos.filter((todo) => !todo.completed);
          case "completed":
            return todos.filter((todo) => todo.completed);
          default:
            return todos;
        }
      },
    }),
    { name: "todo-storage" }
  )
);
