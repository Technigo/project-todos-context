// MyToDoList

import ToDoList from '../components/ToDoList';
import AddToDoForm from '../components/AddToDoForm';
import Counter from "../components/Counter";
import styled from "styled-components";
import { FC } from "react";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4c657e;
  color: #fff;
  width: 100vw; 
  height: 100vh; 
  padding: 20px;
  box-sizing: border-box;
  border-radius: 100px;
  overflow: hidden; 


  @media (min-width: 1024px) {
    width: 36vw; 
    height: 70vh;
    padding: 40px;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledToDoList = styled.div`
width: 100%;
height: 100%;
overflow - y: auto;
padding: 10px;
`;



const StyledFormContainer = styled.div`
  position: sticky; 
  bottom: 0; 
  width: 100%;
  background-color: #4c657e; 
  padding: 10px 15px;
  
  z-index: 1;
`;

const MyToDoListPage: FC = () => {
  return (
    <StyledContainer>
      <h1>My To-Do List</h1>
      <StyledToDoList>
        <ToDoList />
      </StyledToDoList>
      <StyledFormContainer>
        <AddToDoForm />
      </StyledFormContainer>
      <Counter />
    </StyledContainer>
  );
};

export default MyToDoListPage;
