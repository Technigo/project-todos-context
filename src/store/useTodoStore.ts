import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task } from "../types";
import { v4 as uuidv4 } from "uuid";

interface TodoState {
  tasks: Task[]; // Added tasks state

  addTask: (title: string) => void; // Added addTask function

  removeTask: (id: string) => void; // Added removeTask function

  toggleTask: (id: string) => void; // Added toggleTask function

  completeAll: () => void; // Added completeAll function

  editTask: (id: string, newTitle: string) => void; // Added editTask function
}

const useTodoStore = create<TodoState, [["zustand/persist", TodoState]]>(
  persist(
    (set) => ({
      tasks: [],

      addTask: (title: string) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: uuidv4(),
              title,
              completed: false,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      removeTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      toggleTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),

      completeAll: () =>
        set((state) => ({
          tasks: state.tasks.map((task) => ({ ...task, completed: true })),
        })),

      editTask: (id: string, newTitle: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, title: newTitle } : task
          ),
        })),
    }),
    {
      name: "todo-storage",
    }
  )
);

export default useTodoStore;
