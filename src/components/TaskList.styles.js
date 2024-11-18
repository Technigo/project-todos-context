import styled from "styled-components";

export const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`;

export const TaskCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.completed ? 0.5 : 1)};
  transition: all 0.2s ease;
  border: 1px solid #eee;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  background-color: ${(props) =>
    props.category === "work" ? "#e8f0fe" : "#fce8ff"};
  color: ${(props) => (props.category === "work" ? "#1a73e8" : "#c026d3")};
`;

export const MoreButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #666;
`;

export const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TaskTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TaskText = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#666" : "inherit")};
`;

export const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
`;

export const DeleteButton = styled.button`
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: #dc2626;
  font-size: 0.9rem;
  opacity: 0;
  transition: all 0.2s ease;
  
  ${TaskCard}:hover & {
    opacity: 1;
  }
  
  &:hover {
    background-color: #fee2e2;
  }
`;
