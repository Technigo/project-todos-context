import { useThemeStore } from '../stores/useThemeStore';
import "./ToggleThemeBtn.css";

export const ThemeToggleButton = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
    >
      Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}

