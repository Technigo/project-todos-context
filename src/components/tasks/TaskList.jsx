import styled from "styled-components";
import { useTaskStore } from "../../stores/useTaskStore";
import bin from "../../assets/bin.png"

const TaskMap = styled.div`
max-height: 600px;
margin: 20px;
box-sizing: border-box;
overflow: scroll;
box-shadow: 2px 2px 1px 0px rgba(240,231,134,1),
4px 2px 1px 0px rgba(74,74,74,1),
6px 3px 1px 0px rgba(240,231,134,1),
8px 3px 1px 0px rgba(74,74,74,1),
10px 4px 1px 0px rgba(240,231,134,1),
12px 4px 1px 0px rgba(74,74,74,1);
`;

const TaskCount = styled.div`
width: 500px;
/* background-color: black; */
background-color: #32231c;
color: white;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 15px;
font-family: courier, monospace;
font-size: 16px;
`;

const ListWrapper = styled.div`
border-top: 5px #32231c;;
`;

const ListContainer = styled.ul`
  background-color: #f0e786;
  font-size: 22px;
  padding: 0 !important;
  margin: 0;
  width: 500px;
  /* font-family: courier, monospace; */
  font-family: "Indie Flower", cursive;
  font-weight: 550;
  border-right: 2px solid #4A4A4A; 
  border-bottom: 1px dotted #b4b3b3;
`;

const List = styled.li`
  list-style: none;
  border-bottom: 1px dotted #b4b3b3;
  text-indent: 25px;
  height: auto;
  padding: 10px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input:checked + label {
    text-decoration: line-through;
    color: gray; /* You can change the color to match your design */
  }
`;

const Label = styled.label`
display: flex;
flex-direction: row;
align-items: center;
`;

const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  cursor: pointer;
  &:checked {
    border: 2px solid green;
    position: relative;
  }
  &:checked::after {
    content: '✓';
    color: green;
    font-size: 30px;
    display: block;
    text-align: center;
    line-height: 9px;
 }
 &:checked + label {
    text-decoration: line-through;
    color: gray; 
  }
`;

const RemoveButton = styled.button`
  border: none;
  padding: none;
  background-color: inherit;
  cursor: pointer;
  img {
  width: 2rem;
  height: 2rem;
  transition: transform 0.3s ease, filter 0.3s ease;
  }
  &:hover {
    transform: scale(1.2); 
  }
  
  `;

export const TaskList = () => {
const { 
  tasks, 
  toggleTaskCompletion, 
  totalTaskCount, 
  completedTaskCount,
  removeTask 
  } = useTaskStore();

return (
  <TaskMap>
    <TaskCount>
      <p>Total tasks: {totalTaskCount()}</p>
      <p>Completed tasks: {completedTaskCount()}</p>
    </TaskCount>
    {tasks.length === 0 ? (
    <p>No tasks available. Add some tasks!</p> //Alternative if there are no tasks
    ) : (
    <ListWrapper>
    <ListContainer>
      {tasks.map((task) => (
        <List key={task.id}>
          <Label>
            <Input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.text}
          </Label>
          <RemoveButton onClick={() => removeTask(task.id)}><img src={bin} alt="Delete-Button" /></RemoveButton>
        </List>
      ))}
    </ListContainer>
    </ListWrapper>
    )}
  </TaskMap>
);
};