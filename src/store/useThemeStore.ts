import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the shape of the theme store
interface ThemeStore {
  isDark: boolean; // State: Whether the theme is in dark mode
  toggleTheme: () => void; // Action: Toggles the theme
}

// Create a store to manage the theme with TypeScript
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDark: true, // Default to dark mode
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })), // Toggle the theme
    }),
    { name: "theme-storage" } // Key used to store the theme state in localStorage
  )
);
