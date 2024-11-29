import { create } from "zustand";
import { persist, PersistStorage } from 'zustand/middleware';

interface Project {
  id: number;
  text: string;
  completed: boolean;
}

interface ProjectState {
  projects: Project[];
  showForm: boolean;
  addProject: (text: string) => void;
  removeProject: (id: number) => void;
  toggleProject: (id: number) => void;
  getProjectNumber: () => number;
  getProjectFinished: () => Project[];
}

// Custom storage implementation
const localStoragePersist: PersistStorage<ProjectState> = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};

export const useProjectStore = create<ProjectState>()(
  persist(
    (set, get) => ({
      projects: [],
      showForm: false,

      // Adds a new project to the store
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

      // Removes a project by its ID
      removeProject: (id) => {
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id)
        }));
      },

      // Toggles the completion status of a project
      toggleProject: (id) => {
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id ? { ...project, completed: !project.completed } : project
          )
        }));
      },

      // Returns the current number of projects
      getProjectNumber: () => get().projects.length,

      // Returns the finished projects
      getProjectFinished: () => {
        return get().projects.filter((project) => project.completed)
      }
    }),
    {
      name: 'project-storage',
      storage: localStoragePersist,
    }
  )
)

