import { create } from "zustand";
import { localStorageMiddleware } from "../utils/localStorageMiddleware";
import { useTaskStore } from "./TaskStore";

const getInitialProjectState = () => {
  const savedState = localStorage.getItem("projectStore");
  return savedState
    ? JSON.parse(savedState)
      : {
          projects: [],
          activeProject: null,
        };
};

export const useProjectStore = create(
  localStorageMiddleware("projectStore")((set) => ({
    ...getInitialProjectState(),

    addProject: (projectName) =>
      set((state) => ({
        projects: [...state.projects, { id: Date.now(), name: projectName }],
      })),

    deleteProject: (projectId) =>
      set((state) => ({
        projects: state.projects.filter((project) => project.id !== projectId),
      })),
  }))
);
