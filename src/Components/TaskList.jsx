import { useToDoContext } from '../Contexts/TodoContext'
import { useState } from 'react'
import moment from 'moment'
import { Filters } from './Filters'
import { AddTaskForm } from './AddTaskForm'
import { CategoryFilters } from './CategoryFilters'
import { ProgressCircle } from './ProgressCircle'
import '../Styles/Task.css'

export const TaskList = () => {
  // using the context
  const {
    taskList,
    deleteTask,
    completeTask,
    toggleAddTaskPopup,
    showAddTaskPopup,
    loading,
  } = useToDoContext()
  const [filter, setFilter] = useState('all')
  // different filtering based on category and completed or not
  const filteredTasks = taskList.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    if (filter === 'work') return task.category === 'work'
    if (filter === 'personal') return task.category === 'personal'
    if (filter === 'health') return task.category === 'health'
    if (filter === 'economy') return task.category === 'economy'
    if (filter === 'events') return task.category === 'events'
    return true
  })

  const completedTasksCount = taskList.filter((task) => task.completed).length
  const uncompletedTasksCount = taskList.filter(
    (task) => !task.completed
  ).length
  // function to delete task
  const handleDelete = (taskId) => {
    deleteTask(taskId)
  }
  // funcion to handle the change of the checkbox and update the API
  const handleCheckboxChange = (taskId, isCompleted) => {
    completeTask(taskId, isCompleted, isCompleted ? new Date() : null)
  }

  if (loading) {
    return (
      <>
        <img src="/loading.icon.gif" alt="loading-icon"></img>
      </>
    )
  }

  return (
    <>
      <div className="header">
        <div className="user">
          <img src="/man.png" alt="user-picture" />
          <h2>Hello Tom!</h2>
        </div>
        {/* show percentage of progress  */}
        <ProgressCircle
          totalTasks={taskList.length}
          completedTasks={completedTasksCount}
        />
      </div>
      {/* buttons to filter categories */}
      <CategoryFilters setFilter={setFilter} />
      <section className="taskList">
        <Filters
          filter={filter}
          setFilter={setFilter}
          uncompletedTasksCount={uncompletedTasksCount}
        />
        {/* managing empty state case scenario */}
        {filteredTasks.length === 0 ? (
          <>
            <img src="/empty-state.jpg" alt="no-tasks" className="emptyState" />
            <button id="plusButton" onClick={toggleAddTaskPopup}>
              {/* switching sign to indicate that can be toggle to close again */}
              {showAddTaskPopup ? '-' : '+'}
            </button>
          </>
        ) : (
          filteredTasks &&
          filteredTasks.map((item) => (
            <div key={item.id} className="taskItem">
              <input
                id={`checkbox-${item.id}`}
                className="checkboxInput"
                type="checkbox"
                value={item.content}
                checked={item.completed}
                onChange={(e) =>
                  handleCheckboxChange(item.id, e.target.checked)
                }
                aria-labelledby={`content-${item.id}`}
              />
              <label
                htmlFor={`checkbox-${item.id}`}
                className="customRadioCheckbox"
              />
              <div className="customCheckboxContent">
                <h2>
                  {item.content}
                  <br></br>
                  <span>{moment(item.createdAt).format('h:mm a')}</span>
                </h2>
              </div>

              <button
                id={`deleteBtn-${item.id}`}
                onClick={() => handleDelete(item.id)}
                aria-label={`Delete task titled ${item.content}`}
                tabIndex={0}
              >
                ✖️
              </button>
            </div>
          ))
        )}
        {/* Add popup */}
        {showAddTaskPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="popup-close" onClick={toggleAddTaskPopup}></span>
              <AddTaskForm />
            </div>
          </div>
        )}

        {/* Button to toggle add task popup */}
        <button id="plusButton" onClick={toggleAddTaskPopup}>
          {/* switching sign to indicate that can be toggle to close again */}
          {showAddTaskPopup ? '-' : '+'}
        </button>
      </section>
    </>
  )
}
