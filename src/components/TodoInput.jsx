// components/TodoInput.jsx
import styled from 'styled-components'
import { useState } from 'react'
import { useTodoStore } from '../stores/TodoStore'

const InputWrapper = styled.form`
  width: 100%;
  margin-bottom: 24px;
`

const Input = styled.input`
  width: 100%;
  padding: 20px 24px;
  background: rgb(171,255,45);
  border: none;
  border-radius: 50px;
  font-size: 18px;
  color: #000;
  transition: all 0.3s ease;

  &::placeholder {
    color: #333;
  }

  &:focus {
    outline: none;
  }
`

export const TodoInput = () => {
  const [input, setInput] = useState('')
  const addTodo = useTodoStore(state => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      addTodo(input.trim())
      setInput('')
    }
  }

  return (
    <InputWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task.."
        aria-label="New todo input"
      />
    </InputWrapper>
  )
}
