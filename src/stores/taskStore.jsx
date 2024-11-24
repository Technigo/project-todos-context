import { create } from "zustand";

// LocalStorage
const LOCAL_STORAGE_KEY = "todo_tasks";

export const useTaskStore = create((set) => ({
	tasks: loadTasksFromLocalStorage() || [
		{ id: 1, title: "Respond to pending emails", completed: false },
		{ id: 2, title: "Pick up package from delivery point", completed: true },
	],

	// Add a new task
	addTask: (title) =>
		set((state) => {
			const updatedTasks = [
				...state.tasks,
				{ id: Date.now(), title, completed: false },
			];
			saveTasksToLocalStorage(updatedTasks);
			return { tasks: updatedTasks };
		}),

	// Toggle task completion
	toggleTask: (id) =>
		set((state) => {
			const updatedTasks = state.tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			);
			saveTasksToLocalStorage(updatedTasks);
			return { tasks: updatedTasks };
		}),

	// Remove task
	removeTask: (id) =>
		set((state) => {
			const updatedTasks = state.tasks.filter((task) => task.id !== id);
			saveTasksToLocalStorage(updatedTasks);
			return { tasks: updatedTasks };
		}),

	// Move a task up in the list
	moveTaskUp: (id) =>
		set((state) => {
			const index = state.tasks.findIndex((task) => task.id === id);
			if (index > 0) {
				const updatedTasks = [...state.tasks];
				// Swap task with task above
				[updatedTasks[index - 1], updatedTasks[index]] = [
					updatedTasks[index],
					updatedTasks[index - 1],
				];
				saveTasksToLocalStorage(updatedTasks);
				return { tasks: updatedTasks };
			}
			return state;
		}),

	// Move a task down in the list
	moveTaskDown: (id) =>
		set((state) => {
			const index = state.tasks.findIndex((task) => task.id === id);
			if (index < state.tasks.length - 1) {
				const updatedTasks = [...state.tasks];
				// Swap task with task below
				[updatedTasks[index + 1], updatedTasks[index]] = [
					updatedTasks[index],
					updatedTasks[index + 1],
				];
				saveTasksToLocalStorage(updatedTasks);
				return { tasks: updatedTasks };
			}
			return state;
		}),

	// Count completed tasks
	getCompletedCount: () => (state) =>
		state.tasks.filter((task) => task.completed).length,

	// Count uncompleted tasks
	getUncompletedCount: () => (state) =>
		state.tasks.filter((task) => !task.completed).length,
}));

// Load tasks from localStorage
function loadTasksFromLocalStorage() {
	const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
	return savedTasks ? JSON.parse(savedTasks) : null;
}

// Save tasks to localStorage
function saveTasksToLocalStorage(tasks) {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

