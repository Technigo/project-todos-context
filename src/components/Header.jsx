import { useToDoStore } from "../stores/useToDoStore"
import { BodyText } from "../ui/Typography";
import "./Header.css";

export const Header = () => {
  const { getNumber } = useToDoStore()

  return (
    <header>
      <h1>My-To-Do-List</h1>
      <BodyText>Total tasks: {getNumber()}</BodyText>
    </header>
  )
}

