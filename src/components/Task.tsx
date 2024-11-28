import { useTaskStore } from "../stores/useTaskStore";
import styled from "styled-components";

interface TaskContainerProps {
  completed: boolean;
}

const TaskContainer = styled.div.withConfig({    //withConfig and shouldForwardProp: Prevent completed from being forwarded to the DOM. Help from chatGPT. 
  shouldForwardProp: (prop) => prop !== "completed",
})<TaskContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => (props.completed ? "#9AC4C0" : "#f5f5f5")};
  padding: 20px;
  width: 250px;
  height: 240px;
  border-radius: 5px;
  box-shadow: 5px 5px 7px #000;
  
  :after {      
  z-index: -1;
  position: absolute;
  content: "";
  bottom: 15px;
  right: 10px;
  left: auto;
  width: 50%;
  top: 80%;
  max-width:300px;
  background: #000;
  -webkit-box-shadow: 0 15px 10px #000; // Box shadow and transform for a 3D similar effect on the post its. 
  -moz-box-shadow: 0 15px 10px #000;;
  box-shadow: 0 15px 10px #000;;
  -webkit-transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -o-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  transform: rotate(3deg);
}


  /* Adjust size for smaller screens */
  @media (max-width: 800px) {
    width: 490px; 
    max-width: 100%; 
    height: auto; 
    padding: 0.8rem;
  }
`;
// // Use styled-components' shouldForwardProp utility to prevent "completed" from being forwarded to the DOM
// TaskContainer.defaultProps = {
//   as: ({ completed, ...props }) => <div {...props} />, // Remove "completed" when rendering

// };


interface CheckMarkProps {
  completed: boolean;
}

const CheckMark = styled.i<CheckMarkProps>`
  margin-right: 30px; // Space between checkbox and task title
  font-size: 30px; 
  cursor: pointer;
  color: ${(props) => (props.completed ? "#0d7c6f" : "#000")}; /* Green for completed, black otherwise */

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
 padding-top: 10px; 
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

interface TaskProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
    createdAt: string; // Adjust the type if it's not a string
  };
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const { toggleTask, removeTask } = useTaskStore();

  return (
    <TaskContainer completed={task.completed}>
      <CheckMark
        className={`fa ${task.completed ? "fa-check-square" : "fa-square-o"}`}
        completed={task.completed}
        role="checkbox"
        aria-checked={task.completed}
        aria-label={task.completed ? "Mark task as incomplete" : "Mark task as completed"}
        onClick={() => toggleTask(task.id)}
      />
      <H2 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </H2>
      <TrashIcon className="fa fa-trash-o" onClick={() => removeTask(task.id)} />
      <StyledP>
        Created: {new Date(task.createdAt).toLocaleDateString("en-GB")} at{" "}
        {new Date(task.createdAt).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </StyledP>
    </TaskContainer>
  );
};

