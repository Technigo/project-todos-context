import React from "react";
import styled from "styled-components";
import { TaskItem } from "./TaskItem";

const CategoryContainer = styled.div`
  margin-bottom: 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem; /* Align left with items and divider */
`;

const TitleSection = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-right: 0.5rem;
`;

const TaskCount = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #6c757d;
`;

const OptionsButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const Divider = styled.hr`
  margin: 0.5rem 0 1rem; /* Increase bottom margin to create space between the divider and items */
  border: none;
  border-top: 1px solid #333;
  margin-left: 1rem; /* Align with padding on TitleContainer */
  margin-right: 1rem;
`;

const TaskContainer = styled.div`
  padding: 0 1rem; /* Align left with TitleContainer and Divider */
`;

export const Category = ({ category, onToggleTask, onDragAndDrop }) => {
  return (
    <CategoryContainer>
      <TitleContainer>
        <TitleSection>
          <Title>{category.title}</Title>
          <TaskCount>{category.tasks.length}</TaskCount>
        </TitleSection>
        <OptionsButton>•••</OptionsButton>
      </TitleContainer>
      <Divider />
      <TaskContainer>
        {category.tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            categoryId={category.id}
            index={index}
            onToggle={onToggleTask}
            onDragAndDrop={onDragAndDrop}
          />
        ))}
      </TaskContainer>
    </CategoryContainer>
  );
};
