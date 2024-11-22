import React, { useState } from "react";
import styled from "styled-components";

const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  background-color: #007bff;
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
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

const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1d1f21;
  padding: 1rem;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transform: translateY(${({ visible }) => (visible ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 10;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #2b2b2b;
  color: white;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #333;
  border-radius: 6px;
  background: #2b2b2b;
  color: white;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const AddTaskButton = ({ availableCategories, onAddTask }) => {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!category || !task) return;

    onAddTask({ category, task, date });
    setCategory("");
    setTask("");
    setDate("");
    setVisible(false);
  };

  return (
    <>
      <FloatingButton onClick={() => setVisible(true)}>+</FloatingButton>
      <Overlay visible={visible} onClick={() => setVisible(false)} />
      <BottomSheet visible={visible}>
        {availableCategories.length > 0 && (
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            {availableCategories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </Select>
        )}
        <Input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <SubmitButton onClick={handleSubmit}>Add Task</SubmitButton>
      </BottomSheet>
    </>
  );
};
