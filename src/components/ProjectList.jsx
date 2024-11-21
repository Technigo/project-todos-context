import { useProjectStore } from "../stores/ProjectStore";
import { useState } from "react";
import { Project } from "./Project";
import { AddProjectButton } from "./AddProjectButton";
import { useDroppable } from "@dnd-kit/core";
import styled from "styled-components";

const ProjectSection = styled.section`
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;

  h2 {
    color: #2d3748;
    margin-bottom: 1rem;
    font-weight: var(--font-weight-bold);
  }
`;

const ProjectForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #1a73e8;
    }
  }

  button {
    padding: 0.75rem 1.5rem;
    background: #1a73e8;
    color: white;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    font-weight: var(--font-weight-medium);

    &:hover {
      background: #1557b0;
    }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

export const ProjectList = () => {
  const { projects, addProject } = useProjectStore();
  const [newProject, setNewProject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProject.trim()) {
      addProject(newProject);
      setNewProject("");
    }
  };

  return (
    <ProjectSection>
      <h2>Projects</h2>
      <ProjectForm onSubmit={handleSubmit}>
        <input
          type="text"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          placeholder="New project name..."
        />
        <button type="submit">Add Project</button>
      </ProjectForm>
      <ProjectGrid>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </ProjectSection>
  );
};
