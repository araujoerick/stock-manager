import { CircleDollarSignIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardContent,
  SummaryCardHeader,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { getTotalSales } from "@/app/_data-access/dashboard/get-total-sales";

const TotalSalesCard = async () => {
  const totalSales = await getTotalSales();

  return (
    <SummaryCard>
      <SummaryCardHeader>
        <CircleDollarSignIcon />
      </SummaryCardHeader>
      <SummaryCardContent>
        <SummaryCardTitle>Vendas totais</SummaryCardTitle>
        <SummaryCardValue>{totalSales}</SummaryCardValue>
      </SummaryCardContent>
    </SummaryCard>
  );
};

export default TotalSalesCard;
