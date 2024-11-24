// `zustand` to create a state management store
import { create } from "zustand";
// `persist` middleware from `zustand` to enable persistent state storage
import { persist } from "zustand/middleware";

// Create a store to manage the theme (dark or light mode)
export const useThemeStore = create(
  // `persist` middleware to store the state in localStorage for persistence across sessions
  persist(
    (set) => ({
      isDark: true, // Default to dark mode
      //  Toggle the `isDark` state between true and false
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    // Configuration object for the `persist` middleware
    { name: "theme-storage" } // The key used to store the theme state in localStorage
  )
);
