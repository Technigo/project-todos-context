import styled from "styled-components";
import { useTaskStore } from "../../stores/useTaskStore";
import bin from "../../assets/bin.png"

//Styles
const TaskMap = styled.div`
max-height: 37.5rem;
margin: 1.25rem;
box-sizing: border-box;
overflow: scroll;
box-shadow: 2px 2px 1px 0px rgba(240,231,134,1),
4px 2px 1px 0px rgba(74,74,74,1),
6px 3px 1px 0px rgba(240,231,134,1),
8px 3px 1px 0px rgba(74,74,74,1),
10px 4px 1px 0px rgba(240,231,134,1),
12px 4px 1px 0px rgba(74,74,74,1);
@media (max-width: 480px){
  max-height: 25rem;
  box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.3), 8px 8px 20px rgba(0, 0, 0, 0.3), 0 8px 20px rgba(0, 0, 0, 0.3);
}
`;

const TaskCount = styled.div`
  width: 500px;
  background-color: #32231c;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  font-family: courier, monospace;
  font-size: 16px;

  @media (max-width: 425px) {
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.375rem;
  }
  @media (min-width:425px) and (max-width:580px) {
    width: 400px;
  }
  @media (min-width: 1024px) {
    width: 600px;
    font-size: 20px;
  }
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
  font-family: "Indie Flower", cursive;
  font-weight: 550;
  @media (max-width: 480px) {
    width: 300px;
  }
  @media (min-width:425px) and (max-width:580px) {
    width: 400px;
  }
  @media (min-width: 1024px) {
    width: 600px;
    font-size: 25px;
  }
`;

const List = styled.li`
  list-style: none;
  border-bottom: 1px dotted #b4b3b3;
  height: auto;
  min-height: 90px;
  padding: 10px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: scroll;
  position: relative;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  `;

const Input = styled.input`
  appearance: none;
  min-width: 20px;
  max-width: 20px;
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
`;

const TaskText = styled.span`
  text-decoration: ${(props) => (props.$completed === "true" ? "line-through" : "none")};
  margin-left: 10px;
`;

const TaskDate = styled.span`
  position: absolute;
  font-size: 12px;
  right: 10px;
  bottom: 5px;
  font-family: courier, monospace;
  letter-spacing: -0.9px;
  opacity: 0.6;
@media (min-width: 1024px) {
  font-size: 13px;
  }
`;

const RemoveButton = styled.button`
  border: none;
  padding: none;
  background-color: inherit;
  cursor: pointer;
  img {
  filter: sepia(0) saturate(5) hue-rotate(60deg);
  width: 2rem;
  height: 2rem;
  transition: transform 0.3s ease, filter 0.3s ease;
  }
  &:hover {
    transform: scale(1.2); 
    filter: sepia(-2) saturate(10) hue-rotate(90deg);
  }
@media (min-width: 1024px) {
  img{
  width:2.2rem;
  height: 2.2rem;   
  }
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

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
  });
};

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
            <TaskText $completed={task.completed.toString()}>{task.text}</TaskText>
            <TaskDate>Added {formatDate(task.id)}</TaskDate>
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