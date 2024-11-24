import { TaskList } from "./components/TaskList";
import { TaskInput } from "./components/TaskInput";
import { FilterButtons } from "./components/FilterButtons";
import styled from "styled-components";
import { ProjectList } from "./components/ProjectList";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Task } from "./components/Task";
import { Dashboard } from "./components/dashboard/Dashboard";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(
    35deg,
    hsl(206deg 61.27% 80.09%) 0%,
    #9ab8ee 100%
  );
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  width: 100%;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: var(--font-weight-bold);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
  }

  p {
    color: #4a5568;
    font-size: 1.1rem;
    line-height: var(--line-height-normal);
    max-width: 600px;
    font-weight: var(--font-weight-normal);
  }
`;

const Sidebar = styled.div`
  width: 500px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const user = {
  name: "Mika",
};
export const App = () => {
  return (
    <StyledSection>
      <Section>
        <Header>
          <h1>Welcome {user.name}, here are your weekly stats</h1>
          <Dashboard />
        </Header>
        <FilterButtons />
        <TaskInput />
        <TaskList />
      </Section>
      <Sidebar>
        <ProjectList />
      </Sidebar>
    </StyledSection>
  );
};
