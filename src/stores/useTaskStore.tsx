// useTaskStore.tsx

import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware"; // Built in handeling of saving and loading to Local Storage

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskStore = {
  tasks: Task[];
  addTask: (text: string) => void;
  removeTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
};

// Type for persist-configuration
type PersistedStore = (
  config: (set: any, get: any) => TaskStore,
  options: PersistOptions<TaskStore>
) => (set: any, get: any) => TaskStore;

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [], // Empty task array. Each task has id, text, and completed properties

      // Add a new task
      addTask: (text) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now(),
              text: text,
              completed: false
            }, // Generate a unique ID for each task
          ],
        })),

      // Remove a task by ID
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      // Toggle task completion
      toggleTaskCompletion: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
    }),
    {
      name: "task-storage", // Key used in Local Storage
      getStorage: () => localStorage,
    } as PersistOptions<TaskStore>
  )
);
