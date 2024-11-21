import { useTaskStore } from "../stores/useTaskStore";
import styled from "styled-components";


const TaskContainer = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between; /* Ensures content is evenly spaced */
  background-color: ${(props) => (props.completed ? "turquoise" : "#f4d4d4")}; // Green for completed, red for incomplete
  padding: 1rem;
  width: 250px;
  height: 250px;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
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
 font-size: 30px;
 font-family: "Reenie Beanie";  
 font-weight: 500;
 text-align: center; 
 margin: 0; 
 /* margin-top: 15px;  */

`
const StyledP = styled.p`
 font-size: 18px;
 font-family: "Reenie Beanie";  
 font-weight: 500;
 margin: 0;
 text-align: center; /* Centers text within the container */
`

const TrashIcon = styled.i`
  cursor: pointer;
  font-size: 20px; /* Size of the icon */
  color: black; /* Red color for trash bin */
  margin-top: 15px; /* Adds space between the icon and content */
  margin-left: 5px;
  &:hover {
    color: #d32f2f; /* Darker red when hovered */
  }
  transition: color 0.3s ease;
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
        className="fas fa-trash"
        onClick={() => removeTask(task.id)}
      />
      <StyledP>Created: {new Date(task.createdAt).toLocaleString()}</StyledP>
    </TaskContainer>
  );
};