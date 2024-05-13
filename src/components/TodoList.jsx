import { useTodoContext } from './TodoContext'

const TodoList = () => {
  const { todos, deleteTodo, toggleTodo } = useTodoContext()

  const handleDelete = (id) => {
    deleteTodo(id)
  }

  const handleToggle = (id) => {
    toggleTodo(id)
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList