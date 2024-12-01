// useTaskStore.jsx

import { create } from "zustand";
import { persist } from "zustand/middleware"; // Built in handeling of saving and loading to Local Storage

export const useTaskStore = create(
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
    }
  )
);
