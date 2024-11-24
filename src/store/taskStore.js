import { create } from 'zustand';

const getTasksFromLocalStorage = () => {
  try {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  } catch (e) {
    console.error("Error reading tasks from localStorage:", e);
    return [];
  }
};

const saveTasksToLocalStorage = (tasks) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (e) {
    console.error("Error saving tasks to localStorage:", e);
  }
};

export const useTaskStore = create((set) => ({
  tasks: getTasksFromLocalStorage(),
  addTask: (text) =>
    set((state) => {
      const newTasks = [...state.tasks, { id: Date.now(), text, completed: false }];
      saveTasksToLocalStorage(newTasks);
      return { tasks: newTasks };
    }),
  toggleTask: (id) =>
    set((state) => {
      const newTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      saveTasksToLocalStorage(newTasks);
      return { tasks: newTasks };
    }),
  removeTask: (id) =>
    set((state) => {
      const newTasks = state.tasks.filter((task) => task.id !== id);
      saveTasksToLocalStorage(newTasks);
      return { tasks: newTasks };
    }),
}));
