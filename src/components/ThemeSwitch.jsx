import { useThemeStore } from "../stores/useThemeStore";
import { useEffect } from "react";

export const ThemeSwitch = () => {
  // Get the current theme (light or dark) from the Zustand store
  const theme = useThemeStore((state) => state.theme);

  // Get the toggleTheme function to switch themes
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  // useEffect to synchronize the theme with the body element's class
  useEffect(() => {
    // Update the body element's class to match current theme
    document.body.className = theme;
  }, [theme]); // Dependency array ensures this runs whenever theme changes

  return (
    // Button to toggle the theme
    <button
      // Apply dynamic class based on the current theme
      className={`theme-switch ${theme}`}
      // Call toggleTheme function when button is clicked
      onClick={toggleTheme}
      // A11y: describes what the button does
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* The visual toggle circle */}
      <span className="toggle-circle"></span>

      {/* Text indicating the action */}
      <span className="toggle-text">
        {`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      </span>
    </button>
  );
};
