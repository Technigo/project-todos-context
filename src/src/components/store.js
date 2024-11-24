import { create } from "zustand";

export const useTaskStore = create((set) => ({
    tasks: JSON.parse(localStorage.getItem("tasks")) || [], // Asegura que tasks sea un array
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,

    // Añadir una tarea
    addTask: (task) => set((state) => {
        const newTasks = [...state.tasks, task];
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        return { tasks: newTasks };
    }),

    // Eliminar una tarea
    removeTask: (id) => set((state) => {
        const newTasks = state.tasks.filter((task) => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        return { tasks: newTasks };
    }),

    // Alternar si una tarea está completada o no
    toggleTask: (id) => set((state) => {
        const newTasks = state.tasks.map((task) =>
            task.id === id
                ? {
                    ...task,
                    completed: !task.completed,
                    status: task.completed ? "Pending" : "Done", // Cambia entre "Pending" y "Done"
                }
                : task
        );
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        return { tasks: newTasks };
    }),

    // Alternar el modo oscuro
    toggleDarkMode: () => set((state) => {
        const newMode = !state.darkMode;
        localStorage.setItem("darkMode", JSON.stringify(newMode));
        return { darkMode: newMode };
    }),
}));
