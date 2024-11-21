import React from "react";
import styled from "styled-components";
import { useTaskStore } from "../contexts/store";
import { TaskItem } from "./TaskItem";

const ListContainer = styled.div`
  padding: 1rem;
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-style: italic;
  color: #6c757d;
`;

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <ListContainer>
      {tasks.length === 0 ? (
        <EmptyMessage>No tasks yet. Add one to get started!</EmptyMessage>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </ListContainer>
  );
};
