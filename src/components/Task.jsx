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
  TaskCard,
  TaskText,
  TaskFooter,
  DeleteButton,
  OverdueTag,
} from "./TaskList.styles";

export const Task = ({ task }) => {
  if (!task) {
    return null;
  }

  console.log(task.completedAt);

  const { toggleTask, deleteTask } = useTaskStore();

  return (
    <TaskCard completed={task.completed}>
      <TaskHeader>
        {task.category && <Tag category={task.category}>{task.category}</Tag>}
        {task.dueDate && !task.completed && (
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
          <span>
            {task.completed
              ? task.completedAt && `Completed ${moment(task.completedAt).fromNow()}`
              : `Created ${moment(task.timestamp).fromNow()}`}
          </span>
          <DeleteButton onClick={() => deleteTask(task.id)}>
            Delete
          </DeleteButton>
        </TaskFooter>
      </TaskContent>
    </TaskCard>
  );
};
