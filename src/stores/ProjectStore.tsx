import { create } from "zustand";
import { localStorageMiddleware } from "../utils/localStorageMiddleware";
import { Task } from "./TaskStore";

export interface Project {
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

const getInitialProjectState = (): ProjectState => {
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
  localStorageMiddleware("projectStore")((set: any) => ({
    ...getInitialProjectState(),

    addProject: (projectName: string) =>
      set((state: ProjectState) => ({
        projects: [...state.projects, { id: Date.now(), name: projectName }],
      })),

    deleteProject: (projectId: number) =>
      set((state: ProjectState) => ({
        projects: state.projects.filter((project) => project.id !== projectId),
      })),
  }))
);
