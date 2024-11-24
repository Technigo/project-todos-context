import { useTaskStore } from "../stores/useTaskStore";
import { Task } from "./Task";
import styled from "styled-components"
import stickyNote from "../assets/sticky-notes.png"



const TaskSection = styled.section`
  display: grid; 
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px;
  justify-content: center; 
  width: fit-content; /* Adjust the section width to fit the grid content */
  max-width: 100%; /* Prevent it from exceeding the viewport width */
  margin: 0 auto; /* Center the section itself */
  

  /* Media query for tablets (3 tasks per row) */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Adjust for smaller screens (single-column layout) */
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px; 
    gap: 10px;

  }

`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const P = styled.p`
 font-size: 40px;
 font-family: "Reenie Beanie";  
 font-weight: 500;
 margin: 40px 5px 10px;
 text-align: center; /* Centers text within the container */
 color: white; 

 @media (max-width: 480px) {
font-size: 35px; 

} 
`
const Img = styled.img`
max-width: 100%;    
width: 10rem;
height: auto;
margin-top: 20px;


@media (max-width: 480px) {
width: 7rem; 
margin-top: 15px;
} 

`

export const Tasklist = () => {
  const { tasks } = useTaskStore(); // Access the tasks from the store


  return (
    <>
      {tasks.length > 0 ? (   // If no tasks are added the below text will show. 
        <TaskSection>
          {tasks.map((task) =>
          (<Task key={task.id} task={task} />
          ))}
        </TaskSection>
      ) : (
        <CenteredContainer>
          <P>No tasks yet. Add one!</P>
          <Img src={stickyNote} alt="sticky note" className="sticky note" />
        </CenteredContainer>
      )}
    </>
  );
};