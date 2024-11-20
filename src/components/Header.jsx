import { useToDoStore } from "../stores/useToDoStore"
import "./Header.css";

export const Header = () => {
  const { getNumber } = useToDoStore()

  return (
    <header>
      <h1>My-To-Do-List</h1>
      <p>Total tasks: {getNumber()}</p>
    </header>
  )
}

