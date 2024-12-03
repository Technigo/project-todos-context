import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the filter type
export type FilterType = "all" | "active" | "completed";

// Define the shape of a single todo item
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// Define the shape of the store's state and actions
interface TodoStore {
  todos: Todo[]; // State: Array of todo items
  filter: "all" | "active" | "completed"; // State: Current filter

  // Actions
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  completeAll: () => void;
  setFilter: (filter: "all" | "active" | "completed") => void;

  // Getters
  getTotalTodos: () => number;
  getCompletedTodos: () => number;
  getFilteredTodos: () => Todo[];
}

// Create the store with types
export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      filter: "all",
      addTodo: (text) => {
        const newTodo: Todo = {
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
