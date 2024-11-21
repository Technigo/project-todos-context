import { useTaskStore } from "../stores/TaskStore";

export const Dashboard = () => {
  const { tasks } = useTaskStore();

  // Get the start of the current week (7 days ago)
  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - 7);

  const filteredTasks = tasks.filter((task) => task.completed);
  const thisWeekTasks = tasks.filter(
    (task) => task.completed && new Date(task.completedAt) > startOfWeek
  );

  const completedTasks = filteredTasks.length;
  const completedThisWeek = thisWeekTasks.length;

  return (
    <div>
      <div>Completed tasks: {completedTasks}</div>
      <div>Completed this week: {completedThisWeek}</div>
    </div>
  );
};
