import { TaskList } from "./components/TaskList";
import { TaskInput } from "./components/TaskInput";
import { FilterButtons } from "./components/FilterButtons";
import styled from "styled-components";
import { ProjectList } from "./components/ProjectList";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Task } from "./components/Task";
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f5f5f5;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 1440px;
`;

const Header = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

export const App = () => {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Task>Drag me</Task>;

  const handleDragEnd = (event) => {
    if (event.over && event.over.id === "project-list") {
      setIsDropped(true);
    }
  };

  return (
    <Section>
      <Header>
        <h1>Task List</h1>
      </Header>
      <FilterButtons />
      <TaskInput />
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <TaskList />
        {isDropped ? draggableMarkup : "Drop here"}
        <ProjectList />
      </DndContext>
    </Section>
  );
};
