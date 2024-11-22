import { useTaskStore } from "../stores/useTaskStore";
import styled from "styled-components";


const TaskContainer = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between; /* Ensures content is evenly spaced */
  background-color: ${(props) => (props.completed ? "#cfc" : "#f4d4d4")}; // Green for completed, pink for incomplete
  padding: 1rem;
  width: 250px;
  height: 250px;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.356);
  position: relative;
  word-wrap: break-word; /* Ensure long words break and wrap */

  /* Adjust size for smaller screens */
  @media (max-width: 768px) {
    width: 80%; /* Use 80% of the screen width */
    height: auto; 
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for very small screens */
    padding: 0.5rem;
  }

`;
// Use styled-components' shouldForwardProp utility to prevent "completed" from being forwarded to the DOM
TaskContainer.defaultProps = {
  as: ({ completed, ...props }) => <div {...props} />, // Remove "completed" when rendering

};

const CheckMark = styled.i`
  margin-right: 30px; // Space between checkbox and task title
  font-size: 30px; 
  cursor: pointer;
  color: ${(props) => (props.completed ? "#28a745" : "#000")}; /* Green for completed, black otherwise */

`

const H2 = styled.h2`
 font-size: 20px;
 font-family: "Indie Flower", cursive;  
 font-weight: 500;
 text-align: center; 
 margin: 0; 
`
const StyledP = styled.p`
 font-size: 11px;
 font-family: "Poppins"; 
 font-weight: 400;
 margin: 0;
 text-align: left; 
`

const TrashIcon = styled.i`
  cursor: pointer;
  font-size: 22px; /* Size of the icon */
  color: black; 
  margin: 5px 0px 10px 5px; /* Adds space between the icon and content */
  &:hover {
    color: #d32f2f; 
  }
  transition: color 0.3s ease;
  position: absolute; 
  top: 10px; 
  right: 10px; 
`;

export const Task = ({ task }) => {
  const { toggleTask, removeTask } = useTaskStore();

  return (
    <TaskContainer completed={task.completed}>
      {/* Checkbox to toggle task completion */}
      <CheckMark
        className={`fa ${task.completed ? "fa-check-square" : "fa-square-o"}`}
        completed={task.completed}
        role="checkbox"
        aria-checked={task.completed} // Describes the checked state
        aria-label={task.completed ? "Mark task as incomplete" : "Mark task as completed"}
        onClick={() => toggleTask(task.id)}
      />
      <H2 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </H2>
      <TrashIcon
        className="fa fa-trash-o"
        onClick={() => removeTask(task.id)}
      />
      <StyledP>Created: {new Date(task.createdAt).toLocaleDateString("en-GB")} at {new Date(task.createdAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</StyledP>
      {/* "en-gb" gives the date in the format dd/mm/yyyy (or your region's default date format. */}
    </TaskContainer>
  );
};