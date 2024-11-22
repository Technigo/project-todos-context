import React, { useState } from "react";
import styled from "styled-components";

const SheetContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1d1f21;
  color: white;
  padding: 1rem;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transform: translateY(${({ visible }) => (visible ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 10;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ visible }) => (visible ? "block" : "none")};
  z-index: 5;
`;

const AddTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 8px;
  background: #121212;
  color: white;

  &:focus {
    outline: none;
    border: 1px solid #ff69b4;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 500px;
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export function BottomSheet({ visible, onClose, onSubmit }) {
  const [category, setCategory] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ category, task, date });
    setCategory("");
    setTask("");
    setDate("");
    onClose(); // Close the sheet after submission
  };

  return (
    <>
      <Overlay
        visible={visible}
        onClick={() => {
          console.log("Overlay clicked");
          onClose();
        }}
      />
      <SheetContainer
        visible={visible}
        onClick={(e) => {
          console.log("Sheet clicked");
          e.stopPropagation();
        }}
      >
        <AddTaskForm onSubmit={handleSubmit}>
          <Input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button type="submit">Add Task</Button>
        </AddTaskForm>
      </SheetContainer>
    </>
  );
}
