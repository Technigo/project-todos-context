import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task, dueDate) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          text: task,
          completed: false,
          createdAt: new Date(),
          dueDate: dueDate ? new Date(dueDate) : null,
        },
      ],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  markAllCompleted: () =>
    set((state) => ({
      tasks: state.tasks.map((task) => ({ ...task, completed: true })),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));
