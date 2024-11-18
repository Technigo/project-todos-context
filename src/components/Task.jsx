import { useDraggable } from "@dnd-kit/core";
import { useTaskStore } from "../stores/TaskStore";
import getDueStatus from "../utils/getDueDate";
import moment from "moment";
import styled from "styled-components";
import {
  TaskHeader,
  Tag,
  MoreButton,
  TaskContent,
  TaskTitle,
  TaskText,
  TaskFooter,
  DeleteButton,
  OverdueTag,
} from "./TaskList.styles";

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
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const Task = ({ task }) => {
  if (!task) {
    return null;
  }

  const { toggleTask, deleteTask } = useTaskStore();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `task-${task.id}`,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <TaskCard ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <TaskHeader>
        {task.category && <Tag category={task.category}>{task.category}</Tag>}
        {task.dueDate && (
          <OverdueTag dueStatus={getDueStatus(task.dueDate)}>
            {getDueStatus(task.dueDate)}
          </OverdueTag>
        )}
        <MoreButton>•••</MoreButton>
      </TaskHeader>

      <TaskContent>
        <TaskTitle>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <TaskText completed={task.completed}>{task.name}</TaskText>
        </TaskTitle>

        <TaskFooter>
          <span>{moment().endOf(task.dueDate).fromNow()}</span>
          <DeleteButton onClick={() => deleteTask(task.id)}>
            Delete
          </DeleteButton>
        </TaskFooter>
      </TaskContent>
    </TaskCard>
  );
};
