// types/todo.ts

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TodoStore {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}