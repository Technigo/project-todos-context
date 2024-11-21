import { useTaskStore } from "../../stores/useTaskStore";

export const TaskForm = () => {
  const { addTask, setAddTask, setTasks } = useTaskStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks(addTask); // Adds the task
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={addTask}
        onChange={(event) => setAddTask(event.target.value)}
        placeholder="Enter your task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};