import styled from "styled-components";
import { useTaskStore } from "../stores/TaskStore";

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#1a73e8" : "#e8f0fe")};
  color: ${(props) => (props.active ? "white" : "#1a73e8")};
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#1557b0" : "#d3e3fd")};
  }

  span {
    background: ${props => props.active ? 'white' : '#1a73e8'};
    color: ${props => props.active ? '#1a73e8' : 'white'};
    padding: 0.1rem 0.5rem;
    border-radius: 12px;
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const FilterButtons = () => {
  const { activeFilter, setFilter } = useTaskStore();

  return (
    <FilterContainer>
      <FilterButton
        active={activeFilter === "all"}
        onClick={() => setFilter("all")}
      >
        All
        <span>
          {/* Add count badge */}
        </span>
      </FilterButton>
      <FilterButton
        active={activeFilter === "work"}
        onClick={() => setFilter("work")}
      >
        Work
        <span>
          {/* Add count badge */}
        </span>
      </FilterButton>
      <FilterButton
        active={activeFilter === "personal"}
        onClick={() => setFilter("personal")}
      >
        Personal
        <span>
          {/* Add count badge */}
        </span>
      </FilterButton>
      <FilterButton
        active={activeFilter === "completed"}
        onClick={() => setFilter("completed")}
      >
        Completed
        <span>
          {/* Add count badge */}
        </span>
      </FilterButton>
    </FilterContainer>
  );
};
