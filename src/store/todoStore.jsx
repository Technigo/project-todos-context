// Create state management with Zustand here (stores information about the to-do's, done or not e.g.)
import { create } from "zustand";

export const useTodoStore = create((set) => ({
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
}));
