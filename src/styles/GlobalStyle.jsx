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
    transition: all 0.3s ease;
  }

  input, button {
    font-family: inherit;
  }

  button {
    outline: none;
    user-select: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme[props.mode].background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme[props.mode].secondary};
    border-radius: 4px;
  }

  ::placeholder {
    color: ${props => props.theme[props.mode].text}66;
  }
`