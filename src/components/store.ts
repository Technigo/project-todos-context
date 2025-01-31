import { create } from 'zustand';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  tasks: Task[];
  addTask: (task: string) => void;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
  addTask: (task) => set((state) => {
    const updatedTasks = [...state.tasks, { id: Date.now(), text: task, completed: false }];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return { tasks: updatedTasks };
  }),
  toggleTask: (id) => set((state) => {
    const updatedTasks = state.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return { tasks: updatedTasks };
  }),
  removeTask: (id) => set((state) => {
    const updatedTasks = state.tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return { tasks: updatedTasks };
  }),
}));

export default useTodoStore;