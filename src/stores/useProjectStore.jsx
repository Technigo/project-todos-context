import { create } from "zustand";
import { persist } from "zustand/middleware";

// persist is a wrapper function that ensures the state is saved to a persistent storage
export const useProjectStore = create(
    persist((set, get) => ({
        projects: [],
        showForm: false,

        addProject: (text) => {
            const newProject = {
                id: get().projects.length > 0 ? get().projects[get().projects.length - 1].id + 1 : 1,
                text,
                completed: false,
            };
            set((state) => ({
                projects: [...state.projects, newProject]
            }));
        },

        removeProject: (id) => {
            set((state) => ({
                projects: state.projects.filter((project) => project.id !== id)
            }));
        },

        toggleProject: (id) => {
            set((state) => ({
                projects: state.projects.map((project) =>
                    project.id === id ? { ...project, completed: !project.completed } : project
                )
            }));
        },

        getNumber: () => get().projects.length,
    }),
        {
            name: "project-storage",
            getStorage: () => localStorage,
        }
    )
);
