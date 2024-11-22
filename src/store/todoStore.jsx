// Create state management with Zustand 
import { create } from "zustand";

export const useTodoStore = create((set, get) => ({
  todos: [],
  
  // Add a new todo
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),
  
  // Toggle todo completion status
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  // Delete a todo
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  // Get count of incomplete todos
  getIncompleteCount: () => 
    get().todos.filter((todo) => !todo.completed).length,
  
  // Get count of completed todos
  getCompletedCount: () => 
    get().todos.filter((todo) => todo.completed).length,
}));