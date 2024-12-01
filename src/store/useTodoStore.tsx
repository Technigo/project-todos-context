// Create state management with Zustand 
import { create } from "zustand";

//Define type for a single to-do item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

//Define the state and actions types for the store
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  getIncompleteCount: () => number;
  getCompletedCount: () => number;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
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
