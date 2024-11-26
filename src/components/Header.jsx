import { useToDoStore } from "../stores/useToDoStore";
import { useProjectStore } from "../stores/useProjectStore";
import { BodyText } from "../ui/Typography";
import "./Header.css";

export const Header = () => {
  const { getNumber, getToDoFinished } = useToDoStore()
  const { getProjectNumber, getProjectFinished } = useProjectStore()

  const completedProjects = getProjectFinished().length;
  const completedTasks = getToDoFinished().length;

  return (
    <header>
      <h1>My-To-Do-List</h1>
      <BodyText>Total tasks: {getNumber()} | Completed tasks: {completedTasks}</BodyText>
      <BodyText>Total projects {getProjectNumber()} | Completed projects: {completedProjects}</BodyText>
    </header>
  )
}