import styled from "styled-components"
import { TaskList } from "./TaskList"
import { TaskForm } from "./TasksForm"
import { UserInfo } from "./UserInfo"
import { UserSettings } from "./UserSettings"

const TaskWrapper = styled.div`
margin: 0 auto;
max-width: 80vw;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const TaskContainer = () => {
  return(
    <TaskWrapper>
      <UserInfo/>
      <UserSettings/>
      <TaskForm/>
      <TaskList/>
    </TaskWrapper>
  )
};