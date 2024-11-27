import React, { useEffect } from 'react';
import { useThemeStore } from './useThemeStore';
import './themes.css';

export const ThemeProvider = ({ children }) => {
    const isDarkMode = useThemeStore((state) => state.isDarkMode);

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
    }, [isDarkMode]);

    return <>{children}</>;
}
