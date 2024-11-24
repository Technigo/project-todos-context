import { useProjectStore } from "../stores/useProjectStore";
import "./ProjectCard.css";
import { Headline2 } from "../ui/Typography";
import binImage from "../assets/bin.png";
import notesImage from "../assets/notes.png";

export const ProjectCard = () => {
  const { removeProject, projects, toggleProject } = useProjectStore();

  return (
    <>
      <Headline2>Projects</Headline2>
      <div className="project-card">
        {projects.length === 0 ? (
          <div className="no-projects">
            <div className="notes-image-container">
              <img src={notesImage} alt="No Projects" className="notes-image" />
              <p>No projects available</p>
            </div>
          </div>
        ) : (
          projects.map((project) => (
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
          ))
        )}
      </div>
    </>
  );
};
