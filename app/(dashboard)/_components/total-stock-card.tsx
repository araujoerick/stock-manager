import { getTotalStock } from "@/app/_data-access/dashboard/get-total-stock";
import {
  SummaryCard,
  SummaryCardContent,
  SummaryCardHeader,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { PackageIcon } from "lucide-react";

const TotalStockCard = async () => {
  const totalStock = await getTotalStock();

  return (
    <SummaryCard>
      <SummaryCardHeader>
        <PackageIcon />
      </SummaryCardHeader>
      <SummaryCardContent>
        <SummaryCardTitle>Total em estoque</SummaryCardTitle>
        <SummaryCardValue>{totalStock}</SummaryCardValue>
      </SummaryCardContent>
    </SummaryCard>
  );
};

export default TotalStockCard;
