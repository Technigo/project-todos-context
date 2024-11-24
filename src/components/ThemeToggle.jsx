// components/ThemeToggle.jsx
import styled from 'styled-components'
import { useTodoStore } from '../stores/TodoStore'

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${props => props.theme[props.mode].card};
  border: 1px solid ${props => props.theme[props.mode].border};
  color: ${props => props.theme[props.mode].text};
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(45deg);
    background: ${props => props.theme[props.mode].secondary};
  }
`

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTodoStore()
  
  return (
    <ToggleButton 
      onClick={toggleTheme} 
      mode={theme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </ToggleButton>
  )
}