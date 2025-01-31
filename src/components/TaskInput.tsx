import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';


interface TaskInputProps {
  addTask: (task: string) => void;
}

const Form = styled.form`
  display: flex;
  gap: 10px;
  background: #fffbf5;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ff7f7f;
  border-radius: 8px;
  font-size: 16px;
`;

const AddButton = styled.button`
  background-color: #ff7f7f;
  color: white;
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #ff4f4f;
  }
`;

function TaskInput({ addTask }: TaskInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input.trim());
      setInput('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        aria-label="Task input"
      />
      <AddButton type="submit">Add</AddButton>
    </Form>
  );
}

export default TaskInput;