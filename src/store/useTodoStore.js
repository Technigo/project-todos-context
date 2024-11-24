import { create } from "zustand";
import { persist } from "zustand/middleware";

// Create a `useTodoStore` to manage the state and actions related to todos
export const useTodoStore = create(
  // Wrap the store with `persist` middleware to save and load state from localStorage
  persist(
    (set, get) => ({
      // State: Array to hold todo items
      todos: [],
      // State: Filter for displaying todos (default is "all")
      filter: "all",
      // Action: Adds a new todo item to the `todos` array
      addTodo: (text) => {
        const newTodo = {
          // Generate a unique ID for the todo
          id: crypto.randomUUID(),
          // The text of the todo
          text,
          // Default status of the todo (not completed)
          completed: false,
          // Timestamp for when the todo was created
          createdAt: new Date(),
        };
        // Prepend the new todo to the existing todos array
        set((state) => ({ todos: [newTodo, ...state.todos] }));
      },
      // Action: Toggles the `completed` status of a todo by its `id`
      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      // Action: Removes a todo from the list by its `id`
      removeTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      // Action: Marks all todos as completed
      completeAll: () => {
        set((state) => ({
          todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        }));
      },
      // Action: Sets the current filter value (e.g., "all", "active", "completed")
      setFilter: (filter) => {
        set({ filter });
      },
      // Getter: Returns the total number of todos
      getTotalTodos: () => get().todos.length,
      // Getter: Returns the number of completed todos
      getCompletedTodos: () =>
        get().todos.filter((todo) => todo.completed).length,
      // Getter: Returns todos based on the current filter
      getFilteredTodos: () => {
        const { todos, filter } = get();
        switch (filter) {
          // Return only active (incomplete) todos
          case "active":
            return todos.filter((todo) => !todo.completed);
          // Return only completed todos
          case "completed":
            return todos.filter((todo) => todo.completed);
          // Return all todos if no filter is applied
          default:
            return todos;
        }
      },
    }),
    // Configuration for `persist` middleware
    { name: "todo-storage" } // Key under which the state is stored in localStorage
  )
);
