import { create } from 'zustand';

export const useTaskStore = create((set) => ({
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], // Läs från localStorage eller använd tom lista
  addTask: (text) =>
    set((state) => {
      const newTasks = [...state.tasks, { id: Date.now(), text, completed: false }];
      localStorage.setItem("tasks", JSON.stringify(newTasks)); // Spara uppgifterna i localStorage
      return { tasks: newTasks };
    }),
  toggleTask: (id) =>
    set((state) => {
      const newTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks)); // Spara uppdaterade uppgifter i localStorage
      return { tasks: newTasks };
    }),
  removeTask: (id) =>
    set((state) => {
      const newTasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(newTasks)); // Spara de kvarvarande uppgifterna i localStorage
      return { tasks: newTasks };
    }),
}));
