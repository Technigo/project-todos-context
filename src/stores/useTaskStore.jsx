import { create } from "zustand";

// Create a Zustand store for managing tasks
export const useTaskStore = create((set) => ({
  // State: An array to hold all the tasks
  tasks: [],

  // Action: Add a new task to the store
  addTask: (task) =>
    set((state) => ({
      // Update the state by adding the new task to the existing list
      tasks: [...state.tasks, task],
    })),

  // Action: Toggle the 'completed' status of a task
  toggleTask: (id) =>
    set((state) => ({
      // Map through the tasks to find the task by id and toggle its completed state
      tasks: state.tasks.map(
        // Iterates over the list of tasks
        (task) =>
          // If the current task's id matches the given id, create a new task object with 'completed' toggled
          task.id === id ? { ...task, completed: !task.completed } : task // Otherwise, return task as is
      ),
    })),

  // Action: Delete a task from the store
  deleteTask: (id) =>
    set((state) => ({
      // Filter out the task with the matching 'id'
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));
