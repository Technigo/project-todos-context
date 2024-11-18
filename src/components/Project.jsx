import styled from "styled-components";
import { useProjectStore } from "../stores/ProjectStore";
const ProjectItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: black;
  color: white;
  margin-bottom: 0.5rem;
  min-height: 1.5rem;
`;

export const Project = ({ project }) => {
  const { deleteProject } = useProjectStore();
  return (
    <ProjectItem>
      {project.name}
      <button onClick={() => deleteProject(project.id)}>Delete</button>
    </ProjectItem>
  );
};
