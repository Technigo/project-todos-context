import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToDoContext } from '../Contexts/TodoContext'
import '../Styles/AddTaskForm.css'
export const AddTaskForm = () => {
  const { addTask, toggleAddTaskPopup } = useToDoContext()
  const [newTask, setNewTask] = useState({ content: '', category: '' })
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (newTask.content && newTask.category) {
      addTask(newTask)
      setNewTask({ content: '', category: '' })
      navigate('/')
      setShowSuccessMessage(true)
      setTimeout(() => setShowSuccessMessage(false), 3000)
      setTimeout(() => toggleAddTaskPopup(false), 1000)
    } else {
      confirm('Please fill in the form')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add your new Task
        <textarea
          name="content"
          cols="30"
          rows="10"
          placeholder="Task to-do..."
          value={newTask.content}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <label>
        Category:
        <select
          name="category"
          id="category"
          onChange={handleChange}
          value={newTask.category}
          required
        >
          <option selected value="Choose an option">
            Choose an option👇🏻
          </option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="health">Health</option>
          <option value="events">Events</option>
          <option value="economy">Economy</option>
        </select>
      </label>

      <button type="submit">Submit</button>
      {showSuccessMessage && <p>Task added successfully!</p>}
    </form>
  )
}
