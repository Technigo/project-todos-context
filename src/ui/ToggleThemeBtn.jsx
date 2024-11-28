import { useThemeStore } from '../stores/useThemeStore';
import "./ToggleThemeBtn.css";
import moon from "../assets/moon.png"
import brightness from "../assets/brightness.png"

export const ThemeToggleButton = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <>
      <button
        onClick={toggleTheme}
        className="theme-toggle-btn"
      >
        <img
          src={isDarkMode ? moon : brightness}
          alt={isDarkMode ? "Dark Mode" : "Light Mode"}
          className="theme-icon"
        />
      </button>
    </>
  );
}

