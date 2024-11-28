import { create } from "zustand"
import { persist } from "zustand/middleware";

interface Task {
title: string; 
id: number;
completed: boolean; 
createdAt: string;
}

interface TaskStore {
tasks: Task [];
addTask: (title:string) =>void; 
//void is used to indicate that a function does not return any value. addTask, removeTask, and toggleTask functions, they perform actions like modifying the store's state but don’t return any data back to the caller.
removeTask: (id:number) =>void; 
toggleTask: (id:number) =>void; 
getTotalTasks: ()=> number; 
getCompletedTasks: ()=>number; 
}


export const useTaskStore = create(
  // persist middleware, automatically handles saving and retrieving state from local storage.
  persist(
    (set, get) => ({
      tasks: [], //Empty list from the beginning

      // Function to add a new task
      addTask: (title:string) => {
        const newTask = {
          id: Date.now(), //A unique ID for each new task. 
          title, //The title, what you name the task. 
          completed: false, //The task starts as uncompleted 
          createdAt: new Date().toISOString(), //Timestamp
        };
        set((state:TaskStore) => ({ tasks: [...state.tasks, newTask] })); //The state parameter in your set function refers to the current state of the store. In TypeScript, you should type it as TaskStore to ensure the state conforms to the structure defined in your TaskStore interface.
      },

      //A function to remove a task by its ID
      removeTask: (id:number) =>
        set((state: TaskStore) => ({
          tasks: state.tasks.filter((task: Task) => task.id !== id),
        })),

      //A function to toggle a tasks´s completion status 
      toggleTask: (id:number) =>
        set((state: TaskStore) => ({
          tasks: state.tasks.map((task: Task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      // Derived state: Total number of tasks, get() is used to access the current state inside derived state methods.
      getTotalTasks: () => get().tasks.length,  //A computed value that returns the total number of tasks (tasks.length).

      // Derived state: Number of completed tasks
      getCompletedTasks: () =>
        get().tasks.filter((task: Task) => task.completed).length, //A computed value that returns the number of tasks where completed is true.

    }),
    {
      name: "task-storage",   //Name of the key in localStorage
    }
  )
); 