import { create } from "zustand";

export const useTaskStore = create ((set, get) => ({
  //State of the input field value in TaskForm, set to an empty string 
  addTask: "",

  //Array of displayed tasks, begins with some hardcoded tasks
  tasks: [
    { id: 1, text: "Make to-do app", completed: false },
    { id: 2, text: "Clean kitchen", completed: true },
    { id: 3, text: "Walk the dog", completed: false },
  ],



  //COUNT
  // Get the total task count using get method
  totalTaskCount: () => get().tasks.length,

  // Get the count of completed tasks using get method
  completedTaskCount: () =>
  get().tasks.filter((task) => task.completed).length,




  //ACTION FUNCTIONS
  // Update the addTask input value
  setAddTask: (value) => set({ addTask: value }),

  //Update the tasks value with the tasks that have been added in the form
  setTasks: (newTask) => { 
    if (newTask.trim()) {
      set((state) => ({
      tasks: [
      ...state.tasks, 
      { id: Date.now(), text: newTask, completed: false }],
      addTask: "", //Clears the input field
    }));
  }
},
  // Toggle task completion status
  toggleTaskCompletion: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task),
    })),

}));