import { create } from "zustand";

// Create and export a Zustand store for managing theme state
export const useThemeStore = create((set) => ({
  theme: "light", // Default theme

  toggleTheme: () =>
    // Function to toggle between light and dark themes
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));
