import styled from "styled-components";
import { useTaskStore } from "../stores/TaskStore";

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 480px) {
    gap: 0.25rem;
    justify-content: center;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "var(--color-accent-primary)" : "#e8f0fe"};
  color: ${(props) =>
    props.active ? "white" : "var(--color-accent-secondary)"};
  font-size: 0.9rem;
  transition: all 0.2s ease;
  font-weight: var(--font-weight-medium);

  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--color-accent-secondary)" : "#d3e3fd"};
  }

  span {
    background: ${(props) =>
      props.active ? "white" : "var(--color-accent-primary)"};
    color: ${(props) =>
      props.active ? "var(--color-accent-primary)" : "white"};
    padding: 0.1rem 0.5rem;
    border-radius: 12px;
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;

    span {
      padding: 0.1rem 0.4rem;
      font-size: 0.7rem;
      margin-left: 0.3rem;
    }
  }
`;

export const FilterButtons = (): React.ReactElement => {
  const { activeFilter, setFilter, tasks } = useTaskStore();

  return (
    <FilterContainer role="group" aria-label="Filter tasks">
      <FilterButton
        active={activeFilter === "all"}
        onClick={() => setFilter("all")}
        aria-label={`Show all tasks (${tasks.length} tasks)`}
        aria-pressed={activeFilter === "all"}
      >
        All
        <span>{tasks.length}</span>
      </FilterButton>
      <FilterButton
        active={activeFilter === "work"}
        onClick={() => setFilter("work")}
        aria-label={`Show work tasks (${tasks.filter((task) => task.category === "work" && !task.completed).length} tasks)`}
        aria-pressed={activeFilter === "work"}
      >
        Work
        <span>
          {
            tasks.filter((task) => task.category === "work" && !task.completed)
              .length
          }
        </span>
      </FilterButton>
      <FilterButton
        active={activeFilter === "personal"}
        onClick={() => setFilter("personal")}
        aria-label={`Show personal tasks (${tasks.filter((task) => task.category === "personal" && !task.completed).length} tasks)`}
        aria-pressed={activeFilter === "personal"}
      >
        Personal
        <span>
          {
            tasks.filter(
              (task) => task.category === "personal" && !task.completed
            ).length
          }
        </span>
      </FilterButton>
      <FilterButton
        active={activeFilter === "completed"}
        onClick={() => setFilter("completed")}
        aria-label={`Show completed tasks (${tasks.filter((task) => task.completed).length} tasks)`}
        aria-pressed={activeFilter === "completed"}
      >
        Completed
        <span>{tasks.filter((task) => task.completed).length}</span>
      </FilterButton>
    </FilterContainer>
  );
};
