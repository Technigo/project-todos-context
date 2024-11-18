import React, { useContext } from "react"
import MyContext from "/src/MyContext"
import "./myComponent.css"

const MyComponent = () => {
  const { todos } = useContext(MyContext)

  const completedTodos = todos.filter((todo) => todo.completed)
  const completedCount = completedTodos.length

  return (
    <div>
      <h2>Completed Tasks: {completedCount}</h2>
      <ul>
        {completedTodos.map((todo) => (
          <li className="completed" key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default MyComponent
