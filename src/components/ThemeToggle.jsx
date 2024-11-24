import React from "react";
import { useThemeStore } from "../store/themeStore";


export const ThemeToggle = () => {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};


