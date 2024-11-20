import { useTaskStore } from "../stores/useTaskStore";

export const TaskList = () => {
const { 
  tasks, 
  toggleTaskCompletion, 
  totalTaskCount, 
  completedTaskCount 
  } = useTaskStore();

return (
  <div>
    <div>
      <p>Total tasks: {totalTaskCount()}</p>
      <p>Completed tasks: {completedTaskCount()}</p>
    </div>
    {tasks.length === 0 ? (
    <p>No tasks available. Add some tasks!</p> //Alternative if there are no tasks
    ) : (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.text}
          </label>
        </li>
      ))}
    </ul>
    )}
  </div>
);
};