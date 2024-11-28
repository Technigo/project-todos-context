/**
 * 
 * The Zustand Store
 * 
 * Import Create to define the initial state and the actions for updating that state.
 * 
 * set: A function provided by Zustand to update the store's state, to modify it. 
 * 

 */

import { create } from "zustand"; 
import data from "../data/data.json";

export const useStore = create((set) => ({

  // *** Import JSON data as the initial state *** 

  title: data.title,
  description: data.description,
  taskTitle: data.taskTitle,
  tasks: data.tasks,

  // *** Add a new task *** 

  addTask: (text) => // Text is the description of the task.
    set((state) => ({ //Updates the state by creating a new tasks array
      tasks: [
        ...state.tasks, //Keeps all existing tasks in the array.
        { text, id: crypto.randomUUID(), completed: false },
      ],
    })),

  // *** Toggle task completion ***

  toggleTask: (id) => // ID - unique identifier of the task to toggle.
    set((state) => ({ //Updates the state by creating a new tasks array
      tasks: state.tasks.map((task) =>
        task.id === id ? // Check if the cirrect task matches the ID. Tasks that don’t match the ID remain unchanged.
        // 
          { ...task, completed: !task.completed } : task // Creates a new object with the same data but true becomes false, and vice versa. 
      ),
    })),

  // *** Remove a task *** 

  removeTask: (id) => // The unique identifier of the task to remove.
    set((state) => ({ //Updates the state by creating a new tasks array
      tasks: state.tasks.filter((task) => task.id !== id), // Creates a new array excluding the task with the matching ID.
    })),
}));

export default useStore;
