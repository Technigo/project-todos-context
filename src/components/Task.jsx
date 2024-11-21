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
  
`;
// Use styled-components' shouldForwardProp utility to prevent "completed" from being forwarded to the DOM
TaskContainer.defaultProps = {
  as: ({ completed, ...props }) => <div {...props} />, // Remove "completed" when rendering
};

const CheckMark = styled.input`
  margin-right: 30px; // Space between checkbox and task title
  width: 20px; /* Set the desired width */
  height: 20px; /* Set the desired height */
  cursor: pointer; // Make it look clickable

`;

const H2 = styled.h2`
 font-size: 25px;
 font-family: "Reenie Beanie";  
 font-weight: 500;
 text-align: center; 
 margin: 0; 

`
const StyledP = styled.p`
 font-size: 18px;
 font-family: "Reenie Beanie";  
 font-weight: 500;
 margin: 0;
 text-align: left; /* Centers text within the container */
`

const TrashIcon = styled.i`
  cursor: pointer;
  font-size: 22px; /* Size of the icon */
  color: black; /* Red color for trash bin */
  margin: 5px 0px 10px 5px; /* Adds space between the icon and content */
  &:hover {
    color: #d32f2f; /* Red when hovered */
  }
  transition: color 0.3s ease;
  position: absolute; 
  top: 10px; /* Distance from the top */
  right: 10px; /* Distance from the right */
`;

export const Task = ({ task }) => {
  const { toggleTask, removeTask } = useTaskStore();

  return (
    <TaskContainer completed={task.completed}>
      {/* Checkbox to toggle task completion */}
      <CheckMark
        type="checkbox" aria-label="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)} // Toggling completion state
      />
      <H2 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </H2>
      <TrashIcon
        className="fa fa-trash-o"
        onClick={() => removeTask(task.id)}
      />
      <StyledP>Created: {new Date(task.createdAt).toLocaleString()}</StyledP>
    </TaskContainer>
  );
};