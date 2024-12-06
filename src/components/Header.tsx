import React from "react";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  /* switchmode did not work on bg so are using bodystyling instead! */
  /* background-color: ${({ theme }: { theme: { isDarkMode: boolean } }) =>
      theme.isDarkMode ? "#444" : "#ddd"}; */
  /* borderswitch does work, why? */
  border-bottom: 1px solid
    ${({ theme }: { theme: { isDarkMode: boolean } }) =>
      theme.isDarkMode ? "#444" : "#ddd"};
  /* switchmode did not work on bg so are using bodystyling instead! */
  /* color: ${({ theme }: { theme: { isDarkMode: boolean } }) =>
    theme.isDarkMode ? "#ddd" : "#444"}; */
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.button`
  background: #6c63ff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }: { theme: { isDarkMode: boolean } }) =>
      theme.isDarkMode ? "#6c63ff" : "#ece8ff"};
  }
`;



interface HeaderProps {
  theme: { isDarkMode: boolean }; 
  togglePopup: () => void; 
}

const Header: React.FC<HeaderProps> = ({ theme, togglePopup }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Title>TODO LIST</Title>
      <div>
        <Button onClick={toggleTheme}>{isDarkMode ? "☀️" : "🌙"}</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
