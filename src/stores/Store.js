// Store.jsx

import { create } from 'zustand';

const useTodoStore = create((set) => ({ // Creates a store using `create`. The function takes `set`, used to update the state.

  todos: [ // Defines the initial state, an array of objects representing tasks.
    { id: "1", text: "Buy groceries", completed: false }, // Task 1
    { id: "2", text: "Walk the dog", completed: true },    // Task 2
  ],

  addTodo: (text) => // Function to add a new task.
    set((state) => ({ // Updates the state using `set`.
      todos: [...state.todos, { id: Date.now().toString(), text, completed: false }],
      // Copies existing tasks (`...state.todos`) and adds a new task:
      // - `id`: Created with `Date.now()` to ensure uniqueness.
      // - `text`: The text passed in from the form.
      // - `completed`: Defaults to `false` as new tasks are always incomplete.
    })),

  removeTodo: (id) => // Function to remove a task.
    set((state) => ({ // Updates the state using `set`.
      todos: state.todos.filter((todo) => todo.id !== id), // Filters out the task with the matching `id`.
    })),

  toggleTodo: (id) => // Function to toggle between `completed: true` and `completed: false`.
    set((state) => ({ // Updates the state using `set`.
      todos: state.todos.map((todo) => // Iterates through all tasks.
        todo.id === id // If the task's ID matches the given ID:
          ? { ...todo, completed: !todo.completed } // Toggle the `completed` property.
          : todo // If the ID doesn't match, return the task as is.
      ),
    })),
}));

export default useTodoStore; 
