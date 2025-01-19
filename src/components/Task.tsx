import { useTaskStore, Task as TaskType } from "../stores/TaskStore";
import getDueStatus from "../utils/getDueDate";
import moment from "moment";
import {
  TaskHeader,
  Tag,
  TaskContent,
  TaskTitle,
  TaskCard,
  TaskText,
  TaskFooter,
  DeleteButton,
  OverdueTag,
} from "./TaskList.styles";

export const Task = ({ task }: { task: TaskType }): JSX.Element | null => {
  if (!task) {
    return null;
  }

  const { toggleTask, deleteTask } = useTaskStore();

  return (
    <TaskCard 
      completed={task.completed}
      role="listitem"
      aria-label={`Task: ${task.name}`}
    >
      <TaskHeader>
        {task.category && (
          <Tag 
            category={task.category}
            role="status"
            aria-label={`Category: ${task.category}`}
          >
            {task.category}
          </Tag>
        )}
        {task.dueDate && !task.completed && (
          <OverdueTag 
            dueStatus={getDueStatus(task.dueDate)}
            role="status"
            aria-label={`Due ${getDueStatus(task.dueDate)}`}
          >
            {getDueStatus(task.dueDate)}
          </OverdueTag>
        )}
      </TaskHeader>

      <TaskContent>
        <TaskTitle>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            aria-label={`Mark ${task.name} as ${task.completed ? 'incomplete' : 'complete'}`}
          />
          <TaskText 
            completed={task.completed}
            aria-checked={task.completed}
          >
            {task.name}
          </TaskText>
        </TaskTitle>

        <TaskFooter>
          <span role="status">
            {task.completed
              ? task.completedAt &&
                `Completed ${moment(task.completedAt).fromNow()}`
              : `Created ${moment(task.timestamp).fromNow()}`}
          </span>
          <DeleteButton 
            onClick={() => deleteTask(task.id)}
            aria-label={`Delete task: ${task.name}`}
          >
            Delete
          </DeleteButton>
        </TaskFooter>
      </TaskContent>
    </TaskCard>
  );
};
