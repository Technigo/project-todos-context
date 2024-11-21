import React, { useState } from "react";
import styled from "styled-components";
import { useTaskStore } from "../contexts/store";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid #ddd;
  background-color: #ffffff;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText, dueDate);
      setTaskText("");
      setDueDate("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
};
