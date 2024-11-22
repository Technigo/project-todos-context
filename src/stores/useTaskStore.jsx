import { create } from "zustand";

const getLocalTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

// Create a Zustand store for managing tasks
export const useTaskStore = create((set) => ({
  // Initialize tasks from local storage
  tasks: getLocalTasks(),

  // Action: Add a new task to the store
  addTask: (task) =>
    set((state) => {
      const updatedTasks = [...state.tasks, task];
      // Save to local storage
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    }),

  // Action: Toggle a task's completed status
  toggleTask: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.map(
        (task) =>
          // If the current task's id matches the given id, create a new task object with 'completed' toggled
          task.id === id ? { ...task, completed: !task.completed } : task
        // Otherwise, return task as is
      );
      // Save to local storage
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    }),

  // Action: Delete a task from the store
  deleteTask: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    }),

  // Action: Mark all tasks as completed
  completeAllTasks: () =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) => ({
        ...task,
        completed: true,
      }));
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    }),
}));
