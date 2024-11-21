import { useToDoStore } from "../stores/useToDoStore";
import { useProjectStore } from "../stores/useProjectStore";
import { BodyText } from "../ui/Typography";
import "./Header.css";

export const Header = () => {
  const { getNumber } = useToDoStore()
  const { getProjectNumber } = useProjectStore()

  return (
    <header>
      <h1>My-To-Do-List</h1>
      <BodyText>Total tasks: {getNumber()}</BodyText>
      <BodyText>Total projects {getProjectNumber()}</BodyText>
    </header>
  )
}

