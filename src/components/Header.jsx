import { ThemeToggleButton } from "../ui/ToggleThemeBtn";
import { useThemeStore } from "../stores/useThemeStore";
import "./Header.css";
import { Headline1 } from "../ui/Typography";

export const Header = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <header className={`header ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <div className="spacer">
      </div>
      <div className="header-text-container">
        <Headline1>To-Do</Headline1>
      </div>
      <ThemeToggleButton />
    </header>
  );
}
