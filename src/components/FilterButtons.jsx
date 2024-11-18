import styled from 'styled-components';
import { useTaskStore } from "../stores/TaskStore";

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.active ? '#1a73e8' : '#e8f0fe'};
  color: ${props => props.active ? 'white' : '#1a73e8'};
  
  &:hover {
    background-color: ${props => props.active ? '#1557b0' : '#d3e3fd'};
  }
`;

export const FilterButtons = () => {
  const { activeFilter, setFilter } = useTaskStore();
  
  return (
    <FilterContainer>
      <FilterButton 
        active={activeFilter === 'all'} 
        onClick={() => setFilter('all')}
      >
        All
      </FilterButton>
      <FilterButton 
        active={activeFilter === 'work'} 
        onClick={() => setFilter('work')}
      >
        Work
      </FilterButton>
      <FilterButton 
        active={activeFilter === 'personal'} 
        onClick={() => setFilter('personal')}
      >
        Personal
      </FilterButton>
    </FilterContainer>
  );
}; 