// AddToDoForm

import { useState, FormEvent } from "react";
import useTodoStore from "../stores/store";
import styled from "styled-components";


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  outline: none;
  background: #f9f9f9;
  color: #333;

  &:focus {
    border-color: #007bff;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: black;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d9363e;
  }
`;


const AddToDoForm = () => {
  const [text, setText] = useState<string>("");
  const addTodo: (text: string) => void = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task.."
      />
      <StyledButton type="submit">Add</StyledButton>
    </StyledForm>
  );
}

export default AddToDoForm;
