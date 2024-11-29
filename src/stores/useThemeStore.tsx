import { create } from 'zustand';

interface ThemeState {
    isDarkMode: boolean;
    isDarkModeProject: boolean;
    toggleTheme: () => void;
    toggleProjectCardTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
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