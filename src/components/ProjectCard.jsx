import { useProjectStore } from "../stores/useProjectStore";
import "./ProjectCard.css";
import { Headline2 } from "../ui/Typography";
import binImage from "../assets/bin.png"

export const ProjectCard = () => {
  const { removeProject, projects, toggleProject } = useProjectStore();

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
            <div className="button-container">
              <button className="bin-button" onClick={() => removeProject(project.id)}>
                <img className="image-bin" src={binImage} alt="Delete" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};