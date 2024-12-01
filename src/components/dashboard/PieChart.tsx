"use client";

import { Label, Pie, PieChart } from "recharts";
import { StyledChartContainer } from "./WeeklyGraph";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/dashboard/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/dashboard/ui/chart";

const chartConfig = {
  tasks: {
    label: "Task Division",
  },
  personal: {
    category: "personal",
    count: "",
    fill: "red",
  },
  work: {
    category: "work",
    count: "",
    fill: "blue",
  },
};

export interface PieData {
  category: string;
  count: number;
  fill: string;
}

interface TaskPieChartProps {
  pieChartData: PieData[];
  totalCompletedWeeklyTasks: number;
}

export const TaskPieChart = ({
  pieChartData,
  totalCompletedWeeklyTasks,
}: TaskPieChartProps): JSX.Element => {
  console.log("Pie Chart Received Data: ", pieChartData);
  console.log("total completed Received Data: ", totalCompletedWeeklyTasks);
  return (
    <StyledChartContainer>
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Task Division Personal vs Work</CardTitle>
          <CardDescription>Last 7 Days</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={pieChartData}
                dataKey="count"
                nameKey="category"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalCompletedWeeklyTasks}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Tasks
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            Showing task division between work and personal for the last 7 days
          </div>
        </CardFooter>
      </Card>
    </StyledChartContainer>
  );
};
