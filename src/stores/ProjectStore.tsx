import { create } from "zustand";
import { localStorageMiddleware } from "../utils/localStorageMiddleware";
import { Task } from "./TaskStore";

interface Project {
  id: number;
  name: string;
  tasks: Task[];
}

interface ProjectState {
  projects: Project[];
}

interface ProjectMethods {
  addProject: (projectName: string) => void;
  deleteProject: (projectId: number) => void;
}

const getInitialProjectState = () => {
  const savedState = localStorage.getItem("projectStore");
  return savedState
    ? JSON.parse(savedState)
    : {
        projects: [],
        activeProject: null,
      };
};

type ProjectStore = ProjectState & ProjectMethods;

export const useProjectStore = create<ProjectStore>()(
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
