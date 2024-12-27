import React from "react";
import styled from "styled-components";
import emptyFolder from "../assets/icons/empty-folder.png";

import { Header } from "./Header";
import { CategoryList } from "./CategoryList";
import { AddTaskButton } from "./AddTaskButton";

import { useTaskStore } from "../contexts/store";

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 150px);
  text-align: center;
  color: #6c757d;
`;

const EmptyIcon = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 1rem;
  filter: invert(1);
`;

const EmptyText = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
`;

export function TaskManager() {
  const categories = useTaskStore((state) => state.categories);
  const title = useTaskStore((state) => state.title);
  const setTitle = useTaskStore((state) => state.setTitle);

  return (
    <>
      <Header title={title} onTitleChange={setTitle} />
      {categories.length === 0 ? (
        <EmptyStateContainer>
          <EmptyIcon src={emptyFolder} alt="Empty folder icon" />
          <EmptyText>Add some items to your checklist to get started!</EmptyText>
        </EmptyStateContainer>
      ) : (
        <CategoryList categories={categories} />
      )}
      <AddTaskButton />
    </>
  );
}
