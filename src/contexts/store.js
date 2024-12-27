import { create } from "zustand";

export const useTaskStore = create((set) => ({
  title: "Checklist", 
  categories: [],
  availableCategories: [],

  setTitle: (newTitle) =>
    set(() => ({
      title: newTitle,
    })),

  addTask: ({ category, task, date }) =>
    set((state) => {
      const existingCat = state.categories.find((c) => c.title === category);

      if (existingCat) {
        const updatedCategories = state.categories.map((cat) =>
          cat.title === category
            ? {
                ...cat,
                tasks: [
                  ...cat.tasks,
                  {
                    id: Date.now(),
                    name: task,
                    date: date || "No Deadline",
                    completed: false,
                  },
                ],
              }
            : cat
        );

        return {
          categories: updatedCategories,
          availableCategories: Array.from(
            new Set([...state.availableCategories, category])
          ),
        };
      } else {
        const newCategory = {
          id: Date.now(),
          title: category,
          tasks: [
            {
              id: Date.now(),
              name: task,
              date: date || "No Deadline",
              completed: false,
            },
          ],
        };
        return {
          categories: [...state.categories, newCategory],
          availableCategories: Array.from(
            new Set([...state.availableCategories, category])
          ),
        };
      }
    }),

  toggleTask: (categoryId, taskId) =>
    set((state) => {
      const updatedCategories = state.categories.map((cat) => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            tasks: cat.tasks.map((task) =>
              task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
            ),
          };
        }
        return cat;
      });

      return { categories: updatedCategories };
    }),

  deleteTask: (categoryId, taskId) =>
    set((state) => {
      const updatedCategories = state.categories.map((cat) => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            tasks: cat.tasks.filter((task) => task.id !== taskId),
          };
        }
        return cat;
      });

      return { categories: updatedCategories };
    }),

  deleteCategory: (categoryId) =>
    set((state) => {
      const updatedCategories = state.categories.filter(
        (cat) => cat.id !== categoryId
      );

      return {
        categories: updatedCategories,
        availableCategories: updatedCategories.map((cat) => cat.title),
      };
    }),
}));
