import { useProjectStore } from "../stores/useProjectStore";
import "./ProjectCard.css";

export const ProjectCard = () => {
  const { projects, toggleProject } = useProjectStore();

  return (
    <div className="project-card">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <div>
            <span
              className={`project-text ${project.completed ? "completed" : ""}`}
              onClick={() => toggleProject(project.id)}
            >
              {project.text}
            </span>
          </div>
          <div className="project-actions">
          </div>
        </div>
      ))}
    </div>
  );
};
