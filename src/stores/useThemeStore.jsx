import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    isDarkMode: false,
    isDarkModeProject: false,

    toggleTheme: () =>
        set((state) => ({
            isDarkMode: !state.isDarkMode,
        })),
    toggleProjectCardTheme: () =>
        set((state) => ({
            isDarkModeProject: !state.isDarkModeProject,
        })),
}));