import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const useTodoStore = create(
  persist(
    (set) => ({
      tasks: [],

      addTask: (title) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: uuidv4(),
              title,
              completed: false,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),

      completeAll: () =>
        set((state) => ({
          tasks: state.tasks.map((task) => ({ ...task, completed: true })),
        })),
    }),
    {
      name: "todo-storage", // Key in local storage
      getStorage: () => localStorage, // Defaults to localStorage
    }
  )
);

export default useTodoStore;
