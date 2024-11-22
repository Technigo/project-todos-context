import { create } from "zustand"
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  // persist middleware, automatically handles saving and retrieving state from local storage.
  persist(
    (set, get) => ({
      tasks: [], //Empty list from the beginning

      // Function to add a new task
      addTask: (title) => {
        const newTask = {
          id: Date.now(), //A unique ID for each new task. 
          title, //The title, what you name the task. 
          completed: false, //The task starts as uncompleted 
          createdAt: new Date().toISOString(), //Timestamp
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },

      //A function to remove a task by its ID
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      //A function to toggle a tasks´s completion status 
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      // Derived state: Total number of tasks, get() is used to access the current state inside derived state methods.
      getTotalTasks: () => get().tasks.length,  //A computed value that returns the total number of tasks (tasks.length).

      // Derived state: Number of completed tasks
      getCompletedTasks: () =>
        get().tasks.filter((task) => task.completed).length, //A computed value that returns the number of tasks where completed is true.

    }),
    {
      name: "task-storage",   //Name of the key in localStorage
    }
  )
); 