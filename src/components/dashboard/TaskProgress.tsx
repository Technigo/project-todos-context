"use client";

import { Task } from "../../stores/TaskStore";
import { StyledChartContainer } from "./WeeklyGraph";
import styled from "styled-components";
import { ChartConfig } from "../../components/dashboard/ui/chart";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/dashboard/ui/card";
import { ChartContainer } from "../../components/dashboard/ui/chart";

const Number = styled.div`
  color: hsl(var(--foreground));
  font-size: 8rem;
  font-weight: 500;
  line-height: 1;
  height: 300px;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 768px) {
    font-size: 4rem;
    height: 100px;
  }
`;

const chartConfig = {
  tasks: {
    taskCount: "",
  },
};

export function TaskProgress({
  tasksDueThisWeek,
}: {
  tasksDueThisWeek: Task[];
}) {
  return (
    <StyledChartContainer>
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Tasks Due this Week</CardTitle>
          <CardDescription>Next 7 Days</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig as ChartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <Number>{tasksDueThisWeek.length}</Number>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            Showing {tasksDueThisWeek.length} tasks due this week
          </div>
        </CardFooter>
      </Card>
    </StyledChartContainer>
  );
}
