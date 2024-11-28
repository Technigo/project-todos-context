import { Header } from "./components/Header"
import { AddTask } from "./components/AddTask"
import { Tasklist } from "./components/Tasklist"


export const App = () => {
  return (
    <div>
      <Header />
      <AddTask />
      <Tasklist />
    </div>
  )
}