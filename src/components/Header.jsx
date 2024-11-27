import { ThemeToggleButton } from "../ui/ToggleThemeBtn";
import { useThemeStore } from "../stores/useThemeStore";
import "./Header.css";

export const Header = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <header className={`header ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <h1>My To-Do List</h1>
      <ThemeToggleButton />
    </header>
  );
}
