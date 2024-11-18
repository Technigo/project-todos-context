import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const TodoContext = createContext()
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {

    setTodos([...todos, todo])
  }

 
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
