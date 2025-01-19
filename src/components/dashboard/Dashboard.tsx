import { useTaskStore } from "../../stores/TaskStore";
import { WeeklyGraph } from "./WeeklyGraph";
import styled from "styled-components";
import { TaskPieChart } from "./PieChart";
import { TaskProgress } from "./TaskProgress";
import { Task as TaskType } from "../../stores/TaskStore";
import { PieData } from "./PieChart";

type ChartDataPoint = {
  day: string;
  completed: number;
};

type WeeklyTaskCategories = {
  personal?: number;
  work?: number;
};

const DashboardContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
    gap: 1.5rem;

    > * {
      width: 100%;
      min-height: 200px;
    }
  }

  @media (max-width: 480px) {
    padding: 0.25rem;
    gap: 1rem;

    > * {
      min-height: 180px;
    }
  }
`;

export const Dashboard = (): JSX.Element => {
  const { tasks }: { tasks: TaskType[] } = useTaskStore();

  // Calculate tasks completed per day for the last 7 days
  const chartData: ChartDataPoint[] = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));

    const dayTasks = tasks.filter(
      (task: TaskType) =>
        task.completed &&
        task.completedAt &&
        new Date(task.completedAt).toDateString() === date.toDateString()
    );

    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      completed: dayTasks.length,
    };
  });

  const weeklyTasksByCategory = tasks.reduce<WeeklyTaskCategories>(
    (acc, task) => {
      // Check if task was completed within the last 7 days
      const completedDate = task.completedAt && new Date(task.completedAt);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);

      if (
        task.completed &&
        task.completedAt &&
        completedDate &&
        completedDate > weekAgo
      ) {
        acc[task.category] = (acc[task.category] || 0) + 1;
      }
      return acc;
    },
    { personal: 0, work: 0 }
  );

  // Transform the weekly category data into the format PieChart expects
  const formattedPieChartData: PieData[] = [
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

  const totalCompletedWeeklyTasks: number = formattedPieChartData.reduce(
    (acc, task) => acc + task.count,
    0
  );

  const tasksDueThisWeek = tasks.filter((task) => {
    const dueDate = task.dueDate && new Date(task.dueDate);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return task.dueDate && dueDate && dueDate > weekAgo;
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
