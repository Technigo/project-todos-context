import { useThemeStore } from "../stores/useThemeStore";
import { ThemeSwitch } from "./ThemeSwitch";
import styled from "styled-components";

export const Header = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <header className={theme}>
      <h1>Hello, Productivity!</h1>
      <ThemeSwitch />
    </header>
  );
};
