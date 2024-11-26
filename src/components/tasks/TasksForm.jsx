import styled from "styled-components";
import { useState } from "react";
import { useTaskStore } from "../../stores/useTaskStore";

//Styles
const Form = styled.form`
  width: 31.25rem;
  height: 8.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 480px) {
    width: 18.75rem;
  }
  @media (min-width:425px) and (max-width:580px) {
    width: 25rem;
  }
  @media (min-width: 1024px) {
    width: 37.5rem;
  }
`;

const Input = styled.input`
  height: 4.375rem;
  border: 0.0625rem solid #32231c;

  &:focus {
    outline: none; 
    padding-left: 0.9375rem;
    font-family: courier, monospace;
    font-size: 1rem;
    color: black;
  }
  &::placeholder {
    color: black;
    font-family: courier, monospace;
    font-size: 1rem;
    padding-left: 0.9375rem;
  }

  @media (min-width: 1024px) {
    &:focus {
      font-size: 1.25rem;
    }
    &::placeholder {
      font-size: 1.25rem;
    }
  }
`;

const TaskButton = styled.button`
  width: 9.375rem;
  padding: 0.3125rem;
  border-radius: 0.9375rem;
  border: 0.0625rem solid #32231c;
  background-color: inherit;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
  background-color: white; 
  color: black; 
  }
  
  @media (min-width: 1024px) {
    font-size: 1.125rem;
    width: 10.625rem;
  }
`;

export const TaskForm = () => {
  const { addTask, setAddTask, setTasks } = useTaskStore();
  const [placeholder, setPlaceholder] = useState("What do I need to do?");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks(addTask); 
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={addTask}
        onChange={(event) => setAddTask(event.target.value)}
        placeholder={placeholder}
        onFocus={() => setPlaceholder("")}
        onBlur={() => setPlaceholder("What do I need to do?")}
      />
      <TaskButton type="submit">+ Add Task</TaskButton>
    </Form>
  );
};