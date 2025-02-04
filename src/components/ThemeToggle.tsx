import useThemeStore from "../store/useThemeStore";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div className="theme-toggle">
      <button
        onClick={toggleTheme}
        className="theme-toggle-button"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <MdDarkMode className="h-6 w-6" />
        ) : (
          <MdLightMode className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
