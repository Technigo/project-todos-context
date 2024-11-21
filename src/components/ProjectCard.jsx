import { useProjectStore } from "../stores/useProjectStore";
import "./ProjectCard.css";
import { Headline2 } from "../ui/Typography";

export const ProjectCard = () => {
  const { projects, toggleProject } = useProjectStore();

  return (
    <>
      <Headline2>Projects</Headline2>
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
    </>
  );
};
