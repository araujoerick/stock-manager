import { formatCurrency } from "@/app/_helpers/currency";
import { DollarSignIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardContent,
  SummaryCardHeader,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { getTodayRevenue } from "@/app/_data-access/dashboard/get-today-revenue";

const TodayRevenueCard = async () => {
  const todayRevenue = await getTodayRevenue();

  return (
    <SummaryCard>
      <SummaryCardHeader>
        <DollarSignIcon />
      </SummaryCardHeader>
      <SummaryCardContent>
        <SummaryCardTitle>Receita hoje</SummaryCardTitle>
        <SummaryCardValue>{formatCurrency(todayRevenue)}</SummaryCardValue>
      </SummaryCardContent>
    </SummaryCard>
  );
};

export default TodayRevenueCard;
