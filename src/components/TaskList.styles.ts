import styled from "styled-components";
import { TaskCategory } from "../stores/TaskStore";

export const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const TaskCard = styled.div<{ completed: boolean }>`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.completed ? 0.5 : 1)};
  transition: all 0.2s ease;
  border: 1px solid #eee;
  max-height: 180px;
  overflow-y: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    height: fit-content;
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Tag = styled.span<{ category?: TaskCategory }>`
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  background-color: ${(props) =>
    props.category === "work" ? "var(--color-pink)" : "var(--color-blue)"};
  color: white;

  @media (max-width: 768px) {
    font-size: 0.675rem;
  }
`;

export const OverdueTag = styled(Tag)<{
  dueStatus: string;
}>`
  ${({ dueStatus }) => {
    // If task is overdue
    if (dueStatus.includes("overdue")) {
      return `
        background-color: #fee2e2;
        color: #dc2626;
      `;
    }
    // If task is due today
    if (dueStatus.includes("today")) {
      return `
        background-color: #fef3c7;
        color: #d97706;
      `;
    }
    // If task is due tomorrow
    if (dueStatus.includes("tomorrow")) {
      return `
        background-color: #e0f2fe;
        color: #0284c7;
      `;
    }
    // If task is due in more than a day
    return `
      background-color: #ecfdf5;
      color: #059669;
    `;
  }}

  transition: all 0.2s ease;
`;

export const MoreButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #666;
  font-size: 0.5rem;
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

export const TaskText = styled.span<{ completed: boolean }>`
  color: ${(props) =>
    props.completed
      ? "var(--color-text-secondary)"
      : "var(--color-text-primary)"};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-weight: var(--font-weight-medium);
  font-size: 1rem;
  line-height: var(--line-height-normal);
`;

export const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #718096;
  font-size: 0.875rem;
  font-weight: var(--font-weight-normal);
`;

export const DeleteButton = styled.button`
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 24px;
  background-color: transparent;
  color: #dc2626;
  font-size: 0.9rem;
  opacity: 0;
  transition: all 0.2s ease;

  ${TaskCard}:hover & {
    opacity: 1;
  }

  &:hover {
    background-color: #fecaca;
  }

  &[aria-label] {
    cursor: pointer;
  }
`;
