"use client";

import { ChartConfig, ChartContainer } from "@/app/_components/ui/chart";
import { DayTotalRevenue } from "@/app/_data-access/dashboard/get-dashboard";
import { BarChart } from "recharts";

const chartConfig: ChartConfig = {
  totalRevenue: {
    label: "Receita",
  },
};

interface RevenueChartProps {
  data: DayTotalRevenue;
}

const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={data} />
    </ChartContainer>
  );
};

export default RevenueChart;
