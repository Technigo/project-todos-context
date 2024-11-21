import { useTaskStore } from "../../stores/TaskStore";
import { WeeklyGraph } from "./WeeklyGraph";
import styled from "styled-components";
import { TaskPieChart } from "./PieChart";
import { TaskProgress } from "./TaskProgress";

const DashboardContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

export const Dashboard = () => {
  const { tasks } = useTaskStore();

  // Calculate tasks completed per day for the last 7 days
  const chartData = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));

    const dayTasks = tasks.filter(
      (task) =>
        task.completed &&
        new Date(task.completedAt).toDateString() === date.toDateString()
    );

    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      completed: dayTasks.length,
    };
  });

  const weeklyTasksByCategory = tasks.reduce((acc, task) => {
    // Check if task was completed within the last 7 days
    const completedDate = new Date(task.completedAt);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    if (task.completed && task.completedAt && completedDate > weekAgo) {
      acc[task.category] = (acc[task.category] || 0) + 1;
    }
    return acc;
  }, {});

  // Transform the weekly category data into the format PieChart expects
  const formattedPieChartData = [
    {
      category: "personal",
      count: weeklyTasksByCategory.personal || 0,
      fill: "hsl(var(--chart-1))",
    },
    {
      category: "work",
      count: weeklyTasksByCategory.work || 0,
      fill: "hsl(var(--chart-2))",
    },
  ];

  const totalCompletedWeeklyTasks = formattedPieChartData.reduce(
    (acc, task) => acc + task.count,
    0
  );

  const tasksDueThisWeek = tasks.filter((task) => {
    const dueDate = new Date(task.dueDate);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return task.dueDate && dueDate > weekAgo;
  });

  console.log("Weekly Tasks by Category: ", formattedPieChartData);

  return (
    <DashboardContainer>
      <WeeklyGraph chartData={chartData} />
      <TaskProgress tasksDueThisWeek={tasksDueThisWeek} />
      <TaskPieChart
        pieChartData={formattedPieChartData}
        totalCompletedWeeklyTasks={totalCompletedWeeklyTasks}
      />
    </DashboardContainer>
  );
};
