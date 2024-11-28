/** 
 * This styled component for the Add task button. 
 * 
 * The onClick prop lets the parent component define what will happen when the button is clicked.
 */

import styled from "styled-components";

// Styled component for the Add Task button
const StyledAddTaskButton = styled.button`
  margin-top: 20px;
  padding: 0.8rem 1.2rem;
  background-color: #f8f8f8;
  color: #4a4a4a;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 200;
  transition: background-color 0.25s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    color: #3b8c40;
  }

  &::before {
    content: "+"; // Add plus symbol
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
  }

  @media (max-width: 1024px) {
    opacity: 1; // The button is by default visible on tablets and mobile. 
    color: #3b8c40;
  }
`;

const AddTaskButton = ({ onClick }) => (
  <StyledAddTaskButton onClick={onClick}>
    Add Task
  </StyledAddTaskButton>
);

export default AddTaskButton;
