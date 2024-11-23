// Handles the application state using Zustand.

import { create } from "zustand"; // Import the "create" function from Zustand.

export const useTodoStore = create((set) => ({
    todos: [],

    // Function to add a new task.
    addTodo: (text) =>
        set((state) => ({
            todos: [
                ...state.todos,
                { id: Date.now(), text, completed: false },
            ],
        })),

    // Function to toggle a tasks as completed status.
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            ),
        })),

    // Function to remove a task.
    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));
