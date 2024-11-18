import { useContext } from "react"
import { TodoContext } from "./TodoContext"
import { Todo } from "./TodoItem"
import "./TodoList.css"

export const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext)

  const completedTodos = todos.filter((todo) => todo.completed)
  const uncompletedTodos = todos.filter((todo) => !todo.completed)

  const completedCount = completedTodos.length
  const uncompletedCount = uncompletedTodos.length

  return (
    <>
      <div className="todo-count-container">
        <span className="todo-count">Uncompleted: {uncompletedCount}</span>
        <span> Completed: {completedCount}</span>
      </div>
      <div className="list-container">
        <div className="uncompleted section">
          {" "}
          <div className="header-container">
            <h2>Uncompleted</h2>
          </div>
          <ul>
            {uncompletedTodos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                todo={todo.todo}
                createdAt={todo.createdAt}
                onChange={() => toggleTodo(todo.id)}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </div>

        <div className="completed section">
          {" "}
          <div className="header-container">
            <h2>Completed</h2>
          </div>
          <ul>
            {completedTodos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                todo={todo.todo}
                createdAt={todo.createdAt}
                onChange={() => toggleTodo(todo.id)}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
 