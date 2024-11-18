import { useTaskStore } from "../stores/TaskStore";
import {
  TaskContainer,
  TaskCard,
  TaskHeader,
  Tag,
  MoreButton,
  TaskContent,
  TaskTitle,
  TaskText,
  TaskFooter,
  DeleteButton,
} from "./TaskList.styles";

export const TaskList = () => {
  const { tasks, toggleTask, deleteTask, activeFilter } = useTaskStore();

  const filteredTasks = tasks.filter(task => 
    activeFilter === 'all' ? true : task.category === activeFilter
  );

  return (
    <TaskContainer>
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} completed={task.completed}>
          <TaskHeader>
            <Tag category={task.category}>{task.category}</Tag>
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
              <span>{task.timestamp.toLocaleDateString()}</span>
              <DeleteButton onClick={() => deleteTask(task.id)}>
                Delete
              </DeleteButton>
            </TaskFooter>
          </TaskContent>
        </TaskCard>
      ))}
    </TaskContainer>
  );
};
