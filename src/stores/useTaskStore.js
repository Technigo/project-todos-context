import { create } from "zustand";
import { nanoid } from "nanoid";

const createTask = ({
  id,
  title,
  isCompleted = false,
  createdAt = new Date(),
  dueDate = null,
}) => ({
  id,
  title,
  isCompleted,
  createdAt,
  dueDate,
});

const useTaskStore = create((set) => ({
  tasks: [], // Initial state: Empty array

  addTask: ({ title, dueDate = null }) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        createTask({
          id: nanoid(),
          title,
          dueDate,
        }),
      ],
    })),

  // Toggle a tasks completation status
  toggleTaskCompletion: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    })),

  // Delete a task
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id), // Keep all tasks but the one we delete
    })),

  // Clear all completed tasks
  clearCompleted: () =>
    set((state) => ({
      tasks: state.tasks.filter((task) => !task.isCompleted), // Keep only umcompleted tasks
    })),
}));

export default useTaskStore;
