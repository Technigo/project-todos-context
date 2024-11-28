// styles/GlobalStyle.jsx
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  /* Remove default focus outlines and add custom ones */
  *:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(62, 11, 157, 0.3);
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #3E0B9D;
    border-radius: 4px;
  }

  /* Placeholder text color */
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`
