import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      isDark: true, // Default to dark mode
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    { name: "theme-storage" }
  )
);
