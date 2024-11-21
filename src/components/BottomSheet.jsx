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
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

const AddTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 8px;
  background: #121212;
  color: white;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
`;

export const BottomSheet = ({ visible, onClose, onSubmit }) => {
  const [category, setCategory] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ category, task, date });
    setCategory("");
    setTask("");
    setDate("");
    onClose();
  };

  return (
    <>
      <Overlay visible={visible} onClick={onClose} />
      <SheetContainer visible={visible}>
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
};
