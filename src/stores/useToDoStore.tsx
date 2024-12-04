import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  showForm: boolean;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  toggleForm: () => void;
  closeForm: () => void;
  getNumber: () => number;
  getToDoFinished: () => Todo[];
}

// Custom storage implementation
const localStoragePersist: PersistStorage<TodoState> = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null; // Parse stored JSON
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value)); // Stringify and store
  },
  removeItem: (name) => {
    localStorage.removeItem(name); // Remove the item
  },
};

export const useToDoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      showForm: false,

      addTodo: (text) => {
        const newTodo: Todo = {
          id: get().todos.length > 0 ? get().todos[get().todos.length - 1].id + 1 : 1,
          text,
          completed: false,
        };
        set((state) => ({
          todos: [...state.todos, newTodo],
        }));
      },

      removeTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },

      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },

      toggleForm: () => {
        set((state) => ({ showForm: !state.showForm }));
      },

      closeForm: () => {
        set({ showForm: false });
      },

      getNumber: () => get().todos.length,

      getToDoFinished: () => {
        return get().todos.filter((todo) => todo.completed);
      },
    }),
    {
      name: 'todo-storage',
      storage: localStoragePersist,
    }
  )
);
