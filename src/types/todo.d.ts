// src/types/todo.d.ts
export interface Todo {
  id: string; // Unique identifier for the todo
  text: string; // The text or content of the todo
  completed: boolean; // Whether the todo is marked as completed
  createdAt: string | number | Date; // The date the todo was created
}
