import { useProjectStore } from "../stores/ProjectStore";
import { useState } from "react";
import { Project } from "./Project";
import { AddProjectButton } from "./AddProjectButton";
import { useDroppable } from "@dnd-kit/core";

export const ProjectList = () => {
  const { projects, addProject } = useProjectStore();
  const [newProject, setNewProject] = useState("");
  const { isOver, setNodeRef } = useDroppable({ id: "project-list" });
  const style = {
    backgroundColor: isOver ? "red" : undefined,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const projectName = formData.get("projectName");
    addProject(projectName);
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2>Projects</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="projectName"
          required
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
      <p>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </p>
    </div>
  );
};
