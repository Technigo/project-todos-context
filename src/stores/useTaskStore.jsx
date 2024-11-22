// useTaskStore.jsx

import { create } from "zustand";
import { persist } from "zustand/middleware"; // Built in handeling of saving and loading to Local Storage

export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [], // List of all tasks
      completedTasks: [], // Index on tasks that is checked as done

      // Add new task
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      // Remove one task
      removeTask: (index) =>
        set((state) => {
          const newTasks = state.tasks.filter((_, i) => i !== index);

          // Update completedTasks by adjusting index
          const newCompletedTasks = state.completedTasks
            .filter((i) => i !== index) // Remove marked/checked task
            .map((i) => (i > index ? i - 1 : i)); // Adjust index for remaining tasks

          return {
            tasks: newTasks,
            completedTasks: newCompletedTasks,
          };
        }),

      // Handle marked/checked tasks
      toggleTaskCompletion: (index) =>
        set((state) => ({
          completedTasks: state.completedTasks.includes(index)
            ? state.completedTasks.filter((i) => i !== index) // Remove if already marked
            : [...state.completedTasks, index], // Add if not marked/checked
        })),
    }),
    {
      name: "task-storage", // The key that is used in Local Storage
      getStorage: () => localStorage, // here I am specifying that I want to save to the Local Storage
    }
  )
);
