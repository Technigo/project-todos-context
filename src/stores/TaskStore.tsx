import { create } from "zustand";
import { localStorageMiddleware } from "../utils/localStorageMiddleware";

export type TaskCategory = "work" | "personal";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
  completedAt: string | null;
  timestamp: string;
  category: TaskCategory;
  dueDate: string | undefined;
  projectId?: number | null;
}

interface TaskState {
  tasks: Task[];
  newTask: string;
  activeFilter: "all" | "personal" | "work" | "completed";
  dueDate: string;
  timestamp: string;
}

interface TaskMethods {
  setFilter: (filter: "all" | "personal" | "work" | "completed") => void;
  addTask: (
    taskName: string,
    category: TaskCategory,
    timestamp: number,
    dueDate: string | undefined,
    projectId?: number | null,
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
  localStorageMiddleware("tasks")((set: any) => ({
    ...getInitialState(),

    setFilter: (filter: string) => set({ activeFilter: filter }),
    addTask: (
      taskName: string,
      category: string,
      dueDate: string,
      projectId: number | null,
      timestamp: string
    ) =>
      set((state: TaskState) => ({
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
    toggleTask: (taskId: number) =>
      set((state: TaskState) => ({
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
    deleteTask: (taskId: number) =>
      set((state: TaskState) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      })),
  }))
);
