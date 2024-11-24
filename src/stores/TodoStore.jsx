// stores/TodoStore.jsx
import { create } from 'zustand'

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, completed: false }]
  })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  removeTodo: (id) => set((state) => ({    // Make sure this is included
    todos: state.todos.filter(todo => todo.id !== id)
  }))
}))