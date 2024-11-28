// stores/TodoStore.tsx
import { create } from 'zustand'
import type { Todo, TodoStore } from '../types/todo'

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [], // empty array the todos
  // Function to add a todo
  // Uses text you type, creates a unique ID, sets completed to false (new task)
  addTodo: (text: string) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, completed: false }]
  })),

  // Function to check a todo to completed/incomplete
  // Finds the specific todo ID and flips completed from false to true
  toggleTodo: (id: number) => set((state) => ({
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),

  //Function to remove a todo
  //Filters through the todos and keeps all except the one with the ID you want to remove
  removeTodo: (id: number) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  }))
}))
