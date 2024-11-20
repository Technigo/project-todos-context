import { useToDoStore } from "../stores/useToDoStore"

export const Header = () => {
  const { getNumber } = useToDoStore()

  return (
    <div>
      <h1>My-To-Do-List</h1>
      <p>Total tasks: {getNumber()}</p>
    </div>
  )
}

