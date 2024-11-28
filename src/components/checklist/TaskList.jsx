/**
 * This is a styled component that handles a list of tasks. 
 * 
 * A list of tasks is fetch from Zustand store. Each item contains and ID, text and completion status. 
 * 
 * Zustand: 
 * - tasks: A list of tasks is fetch from Zustand store. Each item contains and ID, text and completion status. 
 * - toggleTask: A function from Zustand store that toggles the tasks statu when the checkbox is clicked. 
 * - removeTask: A function from Zustand store that removes a task when Delete Button is clicked. 
 * 
 * Left to do: Add a counter with completed and uncompleted tasks. 
 */

import styled from "styled-components";
import useStore from "../../store/store";
import DeleteButton from "../Buttons/DeleteButton";

console.log("TaskList component rendered");
// Container for the task list, adding spacing at the top

const TaskListContainer = styled.div`
  margin-top: 1rem;
`;

const TaskTitle = styled.p`
  font-size: 18px;
  color:#454545;
  padding: 15px 15px 15px 5px;
  margin-bottom: 10px;
  text-align: left;
`;

// Styled component for each task item in the list
const TaskItem = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: 5px;
  padding: 10px 5px;
  box-shadow: 0 2px 0 -1px #ebebeb;

  &:last-of-type {
    box-shadow: none; // Remove shadow for the last task in the list
  }
  &:hover .delete-button {
    opacity: 1; // Make button visible on hover
  }
`;

// Group for Checkbox and Text label
const TaskContent = styled.div`
  display: flex; 
  align-items: center;
  gap: 10px; 
`;

// Checkbox styling
const Checkbox = styled.input`
  margin-right: 10px;
  accent-color: #0eb0b7; 
`;

// Task label styling
const TaskLabel = styled.label`
  font-weight: 200;
  position: relative;
  padding-left: 10px;
  color: ${(props) => (props.completed ? "#888" : "#454545")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  transition: color 0.2s ease-in-out, text-decoration 0.2s ease-in-out;
`;

// TaskList component dynamically renders tasks from the Zustand store
const TaskList = () => {
  // Destructure the data from Zustand store 
  const { taskTitle, tasks, toggleTask, removeTask } = useStore(); 

  console.log("Task Title:", taskTitle);

  return (
    <TaskListContainer>
      {/* Task Title */}
      <TaskTitle>Requirements:</TaskTitle>

       {/* Task counter */}

      {tasks.map((task) => (
        <TaskItem key={task.id}>
          {/* Checkbox for toggling task completion */}
          <TaskContent>
            <Checkbox
              type="checkbox"
              id={`task-${task.id}`}
              checked={task.completed} // Reflect task's completion state
              onChange={() => toggleTask(task.id)} // Toggle task completion in store
            />
            {/* Label showing the task's text */}
            <TaskLabel htmlFor={`task-${task.id}`} completed={task.completed}>
              {task.text}
            </TaskLabel>
          </TaskContent>
          {/* Delete button to remove the task */}
          <DeleteButton
            className="delete-button"
            onClick={() => removeTask(task.id)}
            title="Remove Task"
          />
        </TaskItem>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;

