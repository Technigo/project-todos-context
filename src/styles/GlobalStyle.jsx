import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => {
      console.log("Theme in GlobalStyle:", theme);
      return theme.isDarkMode ? '#121212' : '#ffffff';
    }};
    color: ${({ theme }) => (theme.isDarkMode ? '#ffffff' : '#121212')};
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  input {
    font-size: 16px;
    padding: 8px;
    margin: 5px 0;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => (theme.isDarkMode ? '#444' : '#ccc')};
    background-color: ${({ theme }) => (theme.isDarkMode ? '#333' : '#fff')};
    color: ${({ theme }) => (theme.isDarkMode ? '#fff' : '#333')};
    outline: none;
    transition: background-color 0.3s, color 0.3s;
  }

  input:focus {
    border-color: ${({ theme }) => (theme.isDarkMode ? '#888' : '#007bff')};
  }
`;
