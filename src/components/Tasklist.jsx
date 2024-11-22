import { useTaskStore } from "../stores/useTaskStore";
import { Task } from "./Task";
import styled from "styled-components"


const TaskSection = styled.section`
  display: grid; 
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 30px;
  justify-content: center; /* Center items horizontally */
  width: fit-content; /* Adjust the section width to fit the grid content */
  max-width: 100%; /* Prevent it from exceeding the viewport width */
  margin: 0 auto; /* Center the section itself */
  transition: transform 0.15s linear ease-out;

  
:hover {
  transform: scale(1.1);
}


  /* Media query for tablets (3 tasks per row) */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Media query for mobile (2 tasks per row) */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    /* Disable hover effect on mobile */
    &:hover {
      transform: none;
    }
  }
  

   /* Media query for mobile (2 tasks per row) */
   @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

     /* Disable hover effect on mobile */
    &:hover {
      transform: none;
    }
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const P = styled.p`
 font-size: 30px;
 font-family: "Reenie Beanie";  
 font-weight: 500;
 margin: 40px;
 text-align: center; /* Centers text within the container */
`

export const Tasklist = () => {
  const { tasks } = useTaskStore(); // Access the tasks from the store


  return (
    <>
      {tasks.length > 0 ? (
        <TaskSection>
          {tasks.map((task) =>
          (<Task key={task.id} task={task} />
          ))}
        </TaskSection>
      ) : (
        <CenteredContainer>
          <P>No tasks yet. Add one!</P>
        </CenteredContainer>
      )}
    </>
  );
};