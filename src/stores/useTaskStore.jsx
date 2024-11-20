// useTaskStore.jsx

import { create } from "zustand";
import { NewTask } from "../sections/NewTask";

export const useTaskStore = create((set) => ({
  tasks: [], // All tasks
  completedTasks: [], // Indexon tasks that is checked as done

  // Add new task
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  // Remove one task
  removeTask: (index) =>
    set((state) => {
      const newTasks = state.tasks.filter((_, i) => i !== index);

      const newCompletedTasks = state.completedTasks
        .filter((i) => i !== index)
        .map((i) => (i > index ? i - 1 : i));

      return {
        tasks: newTasks,
        completedTasks: newCompletedTasks,
      };
    }),

  // Handle task completion
  toggleTaskCompletion: (index) =>
    set((state) => ({
      completedTasks: state.completedTasks.includes(index)
        ? state.completedTasks.filter((i) => i !== index) //Remove if already marked
        : [...state.completedTasks, index], // Add if not marked
    })),
}));