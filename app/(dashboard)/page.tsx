import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { getDashboard } from "../_data-access/dashboard/get-dashboard";
import RevenueChart from "./_components/revenue-chart";
import MostSoldProductItem from "./_components/most-sold-product-item";
import TotalRevenueCard from "./_components/total-revenue-card";
import { Suspense } from "react";
import SkeletonCard from "./_components/skeleton-card";
import TodayRevenueCard from "./_components/today-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalStockCard from "./_components/total-stock-card";
import TotalProductsCard from "./_components/total-products-card";

export default async function Home() {
  const { totalLast14DaysRevenue, mostSoldProducts } = await getDashboard();

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
          <Suspense fallback={<SkeletonCard />}>
            <TotalRevenueCard />
          </Suspense>

          <Suspense fallback={<SkeletonCard />}>
            <TodayRevenueCard />
          </Suspense>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,2fr))] gap-4">
          <Suspense fallback={<SkeletonCard />}>
            <TotalSalesCard />
          </Suspense>

          <Suspense fallback={<SkeletonCard />}>
            <TotalStockCard />
          </Suspense>

          <Suspense fallback={<SkeletonCard />}>
            <TotalProductsCard />
          </Suspense>
        </div>
      </div>

      <div className="grid min-h-0 gap-4 xl:grid-cols-[minmax(0,2.05fr),minmax(0,1fr)]">
        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white p-6">
          <p className="text-[clamp(1rem,2.4vw,1.125rem)] font-semibold text-slate-900">
            Receita
          </p>
          <p className="text-sm text-slate-400">Últimos 14 dias</p>

          <RevenueChart data={totalLast14DaysRevenue} />
        </div>

        <div className="flex h-full flex-col gap-6 overflow-hidden rounded-xl bg-white px-6 pt-6">
          <p className="text-[clamp(1rem,2.4vw,1.125rem)] font-semibold text-slate-900">
            Produtos mais vendidos
          </p>
          <div className="custom-scrollbar space-y-4 overflow-y-auto pb-4 pr-4 xl:max-h-[390px]">
            {mostSoldProducts.map((product) => (
              <MostSoldProductItem key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
