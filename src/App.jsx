import { TaskList } from "./components/TaskList";
import { TaskInput } from "./components/TaskInput";
import { FilterButtons } from "./components/FilterButtons";
import { useTaskStore } from "./stores/TaskStore";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
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
  const { tasks } = useTaskStore();
  return (
    <Section>
      <Header>
        <h1>Task List</h1>
        <p>{tasks.length} tasks</p>
      </Header>
      <FilterButtons />
      <TaskInput />
      <TaskList />
    </Section>
  );
};
