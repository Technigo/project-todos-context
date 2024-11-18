import React from "react"
import "./app.css"
import MyComponent from "./components/MyComponent.jsx"
import MyThemeProvider from "./MyThemeProvider.jsx"
import TodoList from "./components/listForm/TodoList.jsx"
import TodoForm from "./components/listForm/TodoForm.jsx"
import Note from "./components/listForm/Note.jsx"
import { ThemeConsumer } from "./ThemeContext.jsx"

const App = () => {
  return (
    <MyThemeProvider>
      <ThemeConsumer>
        {({ theme, toggleTheme }) => (
          <div className={`App ${theme}`}>
            <h1 className="heading">daily planning</h1>
            <button onClick={toggleTheme}>
              Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
            <div className="notesContainer">
              <Note />
            </div>
            <div className="todoContainer">
              <TodoForm />
              <TodoList />
            </div>
            <div className="completedTasksContainer">
              <MyComponent />
            </div>
          </div>
        )}
      </ThemeConsumer>
    </MyThemeProvider>
  )
}

export default App
