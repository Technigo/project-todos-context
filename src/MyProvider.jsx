import React, { useState, useEffect } from "react"
import MyContext from "./MyContext"

const MyProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  const addTodo = (text, dueDate) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      dueDate,
    }
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  }

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  }

  return (
    <MyContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider
