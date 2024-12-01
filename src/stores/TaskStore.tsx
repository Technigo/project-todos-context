import { create } from "zustand";
import { localStorageMiddleware } from "../utils/localStorageMiddleware";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
  completedAt: string | null;
  timestamp: string;
  category: string;
  dueDate: string;
  projectId: string;
}

interface TaskState {
  tasks: Task[];
  newTask: string;
  activeFilter: string;
  dueDate: string;
  timestamp: string; }


interface TaskMethods {
  setFilter: (filter: string) => void;
  addTask: (
    taskName: string,
    category: string,
    dueDate: string,
    projectId: string,
    timestamp: string
  ) => void;
  toggleTask: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

const getInitialState = (): TaskState => {
  const savedState = localStorage.getItem("tasks");
  return savedState
    ? JSON.parse(savedState)
    : {
        tasks: [],
        newTask: "",
        activeFilter: "all",
        dueDate: "",
        timestamp: "",
      };
};

type TaskStore = TaskState & TaskMethods;

export const useTaskStore = create<TaskStore>()(
  localStorageMiddleware("tasks")((set) => ({
    ...getInitialState(),

    setFilter: (filter) => set({ activeFilter: filter }),
    addTask: (taskName, category, dueDate, projectId, timestamp) =>
      set((state) => ({
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            name: taskName,
            completed: false,
            completedAt: null,
            timestamp,
            category,
            dueDate,
            projectId,
          } as Task,
        ],
      })),
    toggleTask: (taskId) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                completed: !task.completed,
                completedAt: !task.completed ? new Date().toISOString() : null,
              }
            : task
        ),
      })),
    deleteTask: (taskId) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      })),
  }))
);
