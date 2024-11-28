// components/TodoItem.tsx
import styled from 'styled-components'
import { useTodoStore } from '../stores/TodoStore'
import type { Todo } from '../types/todo'

interface TodoItemProps {
  todo: Todo
}

interface TextProps {
   $completed: boolean
}

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;
  background: #E8E0FF;
  border-radius: 20px;
  transition: all 0.3s ease;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 4px;

  &:checked {
    accent-color: #251F30;
  }
`

const Text = styled.span<TextProps>`
  font-size: 18px;
  color: #000;
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  flex-grow: 1;
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 20px;
  cursor: pointer;
  padding: 0 8px;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`

export const TodoItem = ({ todo }: TodoItemProps) => {
  // Functions from our Zustand store
  const toggleTodo = useTodoStore(state => state.toggleTodo)
  const removeTodo = useTodoStore(state => state.removeTodo)

  return (
    <Item>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <Text $completed={todo.completed}> 
        {todo.text}
      </Text>
      <DeleteButton
        onClick={() => removeTodo(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        ×
      </DeleteButton>
    </Item>
  )
}
