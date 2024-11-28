/** 
 * This component is a styled component and contains a Checklist.
 * 
 * The Checklist contains of a H2 heading, a list of tasks, an input field for adding new tasks, a delete button and a add task button. 
 * 
 */
import React from "react";
import styled from "styled-components";
import ChecklistHeader from "./ChecklistHeader";
import TaskList from "./TaskList";
import AddTaskButton from "../Buttons/AddTaskButton";
import InputField from './InputField';
import { useState } from "react";
import useStore from "../../store/store"; // Zustand

// Wrapper for the Checklist

const Wrapper = styled.div` 
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  position: relative;

  @media (max-width: 768px) {
    margin: 10px; 
    padding: 15px; 
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    top: 50%;
    bottom: 0;
    left: 10px;
    right: 10px;
    border-radius: 100px / 10px;
  }
`;

const Checklist = () => {
  // Destructure the data from Zustand store 
  const { addTask, title, description } = useStore(); 

  // Stores what the user types in the input field
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask) {
      addTask(newTask); // Add new task
      setNewTask(""); // Clear input field
    }
  };

  return (
    <Wrapper>
      {/* Checklist Header with Description */}
      <ChecklistHeader title={title} description={description} />

      {/* TaskList component to show list of tasks */}
      <TaskList /> 

      {/* Input field and Add Task button */}
        <InputField
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Write a task..."
          />
      <AddTaskButton onClick={handleAddTask}>Add Task</AddTaskButton>
    </Wrapper>
  );
};

export default Checklist;

