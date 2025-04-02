import { getTotalRevenue } from "@/app/_data-access/dashboard/get-total-revenue";
import {
  SummaryCard,
  SummaryCardContent,
  SummaryCardHeader,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { formatCurrency } from "@/app/_helpers/currency";
import { DollarSignIcon } from "lucide-react";

const TotalRevenueCard = async () => {
  const totalRevenue = await getTotalRevenue();

  return (
    <SummaryCard>
      <SummaryCardHeader>
        <DollarSignIcon />
      </SummaryCardHeader>
      <SummaryCardContent>
        <SummaryCardTitle>Receita total</SummaryCardTitle>
        <SummaryCardValue>{formatCurrency(totalRevenue)}</SummaryCardValue>
      </SummaryCardContent>
    </SummaryCard>
  );
};

export default TotalRevenueCard;
