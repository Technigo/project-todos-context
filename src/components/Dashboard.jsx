import { useTaskStore } from "../stores/TaskStore";
import { WeeklyGraph } from "./WeeklyGraph";
import { ChartContainer } from "@/components/ui/chart";
import styled from "styled-components";

const StyledChartContainer = styled(ChartContainer)`
  width: 200px;
  height: 300px;
`;

export const Dashboard = () => {
  const { tasks } = useTaskStore();

  // First, define your chart data
  const chartData = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i)); // This will give us the last 7 days

    const dayTasks = tasks.filter(
      (task) =>
        task.completed &&
        new Date(task.completedAt).toDateString() === date.toDateString()
    );

    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }), // e.g., "Mon", "Tue"
      completed: dayTasks.length,
    };
  });

  // Then, define your chart configuration
  const chartConfig = {
    completed: {
      label: "Completed Tasks",
      color: "hsl(var(--chart-1))", // Using shadcn's chart color tokens
    },
  };

  return (
    <div className="p-4 space-y-4">
      <StyledChartContainer config={chartConfig}>
        <WeeklyGraph />
      </StyledChartContainer>
    </div>
  );
};
