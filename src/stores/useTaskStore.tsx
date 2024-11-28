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


export const useTaskStore = create<TaskStore>()(  
  //a generic call to create, where TaskStore is the type of the store, ensuring TypeScript knows the store’s structure and provides type safety for state management.
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (title: string) => {
        const newTask = {
          id: Date.now(),
          title,
          completed: false,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },
      removeTask: (id: number) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      toggleTask: (id: number) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      getTotalTasks: () => (get() as TaskStore).tasks.length,
      getCompletedTasks: () =>
        (get() as TaskStore).tasks.filter((task) => task.completed).length, // (get() as TaskStore) explicitly tells TypeScript that the state returned by get() should be treated as an object of type TaskStore.
    }),
    {
      name: 'task-storage', // Name of the key in localStorage
    }
  )
);