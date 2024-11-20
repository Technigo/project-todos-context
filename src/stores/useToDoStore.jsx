import { create } from "zustand";

export const useToDoStore = create((set, get) => ({
    todos: [],
    showForm: false,

    addTodo: (text) => set((state) => ({
        todos: [...state.todos, {
            id: state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1,
            text, completed: false
        }]
    })),
    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),
    toggleForm: () => set((state) => ({ showForm: !state.showForm })),
    getNumber: () => get((state) => state.todos.length)
}))