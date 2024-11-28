import { useProjectStore } from "../stores/useProjectStore";
import { useThemeStore } from "../stores/useThemeStore";
import "./ProjectCard.css";
import { Headline2 } from "../ui/Typography";
import binImage from "../assets/bin.png";
import notesImage from "../assets/notes.png";
import { BodyText } from "../ui/Typography";

export const ProjectCard = () => {
  const { removeProject, projects, toggleProject } = useProjectStore();
  const { getProjectNumber, getProjectFinished } = useProjectStore();
  const completedProjects = getProjectFinished().length;
  const isDarkModeProject = useThemeStore((state) => state.isDarkModeProject);

  return (
    <>
      <div className={`project-container ${isDarkModeProject ? "dark-theme-project" : "light-theme-project"}`}>
        <div className="project-card-text">
          <Headline2>Projects</Headline2>
          <BodyText>Total projects {getProjectNumber()} | Completed projects: {completedProjects}</BodyText>
        </div>
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
      </div>
    </>
  );
};
