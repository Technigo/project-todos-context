import React, { useContext } from "react"
import MyContext from "/src/MyContext"
import "./todoList.css"

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useContext(MyContext)

  return (
    <ul>
      {todos.map((todo) => {
        const isValidDate = !isNaN(Date.parse(todo.dueDate))
        const dueDate = isValidDate ? new Date(todo.dueDate) : null
        const formattedDate = isValidDate ? dueDate.toLocaleDateString() : ""
        const formattedTime = isValidDate
          ? dueDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : ""

        return (
          <li className="li-todo todoItem" key={todo.id}>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </div>
            {isValidDate && (
              <div>
                {formattedDate} kl {formattedTime}
              </div>
            )}

            <button onClick={() => removeTodo(todo.id)} className="smallButton">
              X
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
