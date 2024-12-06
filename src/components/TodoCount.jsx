import React from "react";
import useTodoStore from "../store/todoStore";
import styled from "styled-components";


const CountContainer = styled.div`
  text-align: center;
  font-size: 18px;
  font-style: italic;
  margin: 10px 0;
`;

const TodoCount: React.FC = () => {
  const todos = useTodoStore((state) => state.todos); 
  const taskCount = todos.length; 

  return (
    <CountContainer>
      {taskCount === 0
        ? "No tasks yet."
        : `${taskCount} ${taskCount === 1 ? "task" : "tasks"} remaining`}
    </CountContainer>
  );
};

export default TodoCount;
