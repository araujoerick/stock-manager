import { ShoppingBasketIcon } from "lucide-react";
import {
  SummaryCard,
  SummaryCardContent,
  SummaryCardHeader,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { getTotalProducts } from "@/app/_data-access/dashboard/get-total-products";

const TotalProductsCard = async () => {
  const totalProducts = await getTotalProducts();

  return (
    <SummaryCard className="max-[1150px]:col-span-2 max-[835px]:col-span-1">
      <SummaryCardHeader>
        <ShoppingBasketIcon />
      </SummaryCardHeader>
      <SummaryCardContent>
        <SummaryCardTitle>Produtos</SummaryCardTitle>
        <SummaryCardValue>{totalProducts}</SummaryCardValue>
      </SummaryCardContent>
    </SummaryCard>
  );
};

export default TotalProductsCard;
