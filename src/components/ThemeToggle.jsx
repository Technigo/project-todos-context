import useTodoStore from "../store/useTodoStore";

const ThemeToggle = () => {
  const theme = useTodoStore((state) => state.theme);
  const toggleTheme = useTodoStore((state) => state.toggleTheme);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
