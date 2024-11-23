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
  max-height: 30rem;
  box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.3), 8px 8px 20px rgba(0, 0, 0, 0.3), 0 8px 20px rgba(0, 0, 0, 0.3);
}
`;

const TaskCount = styled.div`
  width: 31.25rem;
  background-color: #32231c;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.25rem;
  font-family: courier, monospace;
  font-size: 1rem;

@media (max-width: 425px) {
  width: 18.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.375rem;
}
@media (min-width:425px) and (max-width:580px) {
  width: 25rem;
}
@media (min-width: 1024px) {
  width: 37.5rem;
  font-size: 1.25rem;
}
`;

const NoTasks = styled.p `
  font-family: "Indie Flower", cursive;
  height: 5.3125rem;
  font-size: 1.375rem;
  background-color: #f0e786;
  text-align: center;
  padding: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
@media (min-width: 1024px) {
  font-size: 1.875rem;
  }
`;

const ListWrapper = styled.div`
  border-top: 0.3125rem #32231c;;
`;

const ListContainer = styled.ul`
  background-color: #f0e786;
  font-size: 1.375rem;
  padding: 0 !important;
  margin: 0;
  width: 31.25rem;
  font-family: "Indie Flower", cursive;
  font-weight: 550;
@media (max-width: 480px) {
  width: 18.75rem;
}
@media (min-width:425px) and (max-width:580px) {
  width: 25rem;
}
@media (min-width: 1024px) {
  width: 37.5rem;
  font-size: 1.5625rem;
}
`;

const List = styled.li`
  list-style: none;
  border-bottom: 0.0625rem dotted #b4b3b3;
  height: auto;
  min-height: 5.625rem;
  padding: 0.625rem;
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
  min-width: 1.25rem;
  max-width: 1.25rem;
  height: 1.25rem;
  border: 0.0625rem solid black;
  cursor: pointer;
&:checked {
  border: 0.125rem solid green;
  position: relative;
}
&:checked::after {
  content: '✓';
  color: green;
  font-size: 1.875rem;
  display: block;
  text-align: center;
  line-height: 0.5625rem;
 }
`;

const TaskText = styled.span`
  text-decoration: ${(props) => (props.$completed === "true" ? "line-through" : "none")};
  margin-left: 0.625rem;
`;

const TaskDate = styled.span`
  position: absolute;
  font-size: 0.75rem;
  right: 0.625rem;
  bottom: 0.3125rem;
  font-family: courier, monospace;
  letter-spacing: -0.05625rem;
  opacity: 0.6;
@media (min-width: 1024px) {
  font-size: 0.8125rem;
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
    <NoTasks>You have no tasks yet. Let's add some!</NoTasks> 
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