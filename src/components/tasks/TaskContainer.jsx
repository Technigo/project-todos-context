import styled from "styled-components";
import { TaskList } from "./TaskList";
import { TaskForm } from "./TasksForm";

const TaskWrapper = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  min-height: 50vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 3.125rem;
`;

export const TaskContainer = () => {
  return(
    <TaskWrapper>
      <TaskForm/>
      <TaskList/>
    </TaskWrapper>
  )
};