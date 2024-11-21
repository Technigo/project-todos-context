import { create } from "zustand";

export const useCategoryStore = create((set) => ({
    categories: ["Shopping", "Work", "Personal"],  // Initiale Kategorien

    addCategory: (category) => {
        set((state) => ({
            categories: [...state.categories, category]
        }));
    },

    removeCategory: (category) => {
        set((state) => ({
            categories: state.categories.filter((cat) => cat !== category)
        }));
    },
}));
