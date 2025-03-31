import {
  CircleDollarSignIcon,
  DollarSignIcon,
  PackageIcon,
  ShoppingBasketIcon,
} from "lucide-react";
import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import {
  SummaryCard,
  SummaryCardContent,
  SummaryCardHeader,
  SummaryCardTitle,
  SummaryCardValue,
} from "./_components/summary-card";
import { getDashboard } from "../_data-access/dashboard/get-dashboard";
import { formatCurrency } from "../_helpers/currency";
import RevenueChart from "./_components/revenue-chart";

export default async function Home() {
  const {
    totalRevenue,
    todayRevenue,
    totalSales,
    totalStock,
    totalProducts,
    totalLast14DaysRevenue,
  } = await getDashboard();

  return (
    <main className="flex w-[1188px] flex-col space-y-5 p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Dashboard</HeaderSubtitle>
          <HeaderTitle>Painel de controle</HeaderTitle>
        </HeaderLeft>
      </Header>

      <div className="space-y-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          <SummaryCard>
            <SummaryCardHeader>
              <DollarSignIcon />
            </SummaryCardHeader>
            <SummaryCardContent>
              <SummaryCardTitle>Receita total</SummaryCardTitle>
              <SummaryCardValue>
                {formatCurrency(totalRevenue)}
              </SummaryCardValue>
            </SummaryCardContent>
          </SummaryCard>

          <SummaryCard>
            <SummaryCardHeader>
              <DollarSignIcon />
            </SummaryCardHeader>
            <SummaryCardContent>
              <SummaryCardTitle>Receita hoje</SummaryCardTitle>
              <SummaryCardValue>
                {formatCurrency(todayRevenue)}
              </SummaryCardValue>
            </SummaryCardContent>
          </SummaryCard>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,2fr))] gap-4">
          <SummaryCard>
            <SummaryCardHeader>
              <CircleDollarSignIcon />
            </SummaryCardHeader>
            <SummaryCardContent>
              <SummaryCardTitle>Vendas totais</SummaryCardTitle>
              <SummaryCardValue>{totalSales}</SummaryCardValue>
            </SummaryCardContent>
          </SummaryCard>

          <SummaryCard>
            <SummaryCardHeader>
              <PackageIcon />
            </SummaryCardHeader>
            <SummaryCardContent>
              <SummaryCardTitle>Total em estoque</SummaryCardTitle>
              <SummaryCardValue>{totalStock}</SummaryCardValue>
            </SummaryCardContent>
          </SummaryCard>

          <SummaryCard className="max-[1135px]:col-span-2 max-[820px]:col-span-1">
            <SummaryCardHeader>
              <ShoppingBasketIcon />
            </SummaryCardHeader>
            <SummaryCardContent>
              <SummaryCardTitle>Produtos</SummaryCardTitle>
              <SummaryCardValue>{totalProducts}</SummaryCardValue>
            </SummaryCardContent>
          </SummaryCard>
        </div>
      </div>

      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white p-6">
        <p className="text-lg font-semibold text-slate-900">Receita</p>
        <p className="text-sm text-slate-400">Últimos 14 dias</p>

        <RevenueChart data={totalLast14DaysRevenue} />
      </div>
    </main>
  );
}
