import styled from "styled-components";
import { useProjectStore } from "../stores/ProjectStore";
import { useTaskStore } from "../stores/TaskStore";
import { TaskText, TaskCard, DeleteButton } from "./TaskList.styles";

const ProjectItem = styled.div`
  background: #f0f0f0;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;

  h3 {
    margin: 0;
    color: #2d3748;
    font-weight: var(--font-weight-bold);
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-height: 200px;
  overflow-y: auto;
`;

const TaskItem = styled(TaskCard)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem;
  background: ${(props) => (props.completed ? "#f3f4f6" : "#fff")};
  border-radius: 4px;
  border: 1px solid #e5e7eb;

  span {
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    color: ${(props) => (props.completed ? "#9ca3af" : "#374151")};
  }
`;

const ProjectProgress = styled.div`
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e2e8f0;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const Project = ({ project }) => {
  const { deleteProject } = useProjectStore();
  const { tasks, toggleTask, deleteTask } = useTaskStore();


  const projectTasks = tasks.filter((task) => task.projectId === project.id);

  const completedTasks = projectTasks.filter((task) => task.completed).length;

  return (
    <ProjectItem>
      <ProjectHeader>
        <h3>{project.name}</h3>
        <DeleteButton onClick={() => deleteProject(project.id)}>
          Delete
        </DeleteButton>
      </ProjectHeader>
      <TaskList>
        {projectTasks.map((task) => (
          <TaskItem key={task.id} completed={task.completed}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <TaskText completed={task.completed}>{task.name}</TaskText>
            <DeleteButton onClick={() => deleteTask(task.id)}>
              Delete
            </DeleteButton>
          </TaskItem>
        ))}
      </TaskList>
      <ProjectProgress>
        {completedTasks} out of {projectTasks.length} tasks completed
      </ProjectProgress>
    </ProjectItem>
  );
};
