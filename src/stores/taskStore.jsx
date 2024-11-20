import { create } from "zustand";

const useTaskStore = create((set) => ({
    // State: List of tasks
    tasks: [{ id: 1, title: "Sample Task 1", completed: false },
    { id: 2, title: "Sample Task 2", completed: true },],

    // Add a new task
    addTask: (title) =>
        set((state) => ({
            tasks: [
                ...state.tasks,
                { id: Date.now(), title, completed: false },
            ],
        })),

    // Toggle task completion
    toggleTask: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        })),

    // Remove a task
    removeTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),

    // count completed tasks
    getCompletedCount: () => (state) =>
        state.tasks.filter((task) => task.completed).length,

    //  count uncompleted tasks
    getUncompletedCount: () => (state) =>
        state.tasks.filter((task) => !task.completed).length,
}));

export default useTaskStore;