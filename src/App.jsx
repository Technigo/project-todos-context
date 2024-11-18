import { TodoProvider } from "./components/TodoContext"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"
import "./App.css"

export const App = () => {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1 className="title" onClick={() => location.reload()}>
          My Task Buddy 🥑
        </h1>
        <div className="content-container">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}
