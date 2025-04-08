import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import { getDashboard } from "../_data-access/dashboard/get-dashboard";
import MostSoldProductItem from "./_components/most-sold-product-item";
import TotalRevenueCard from "./_components/total-revenue-card";
import { Suspense } from "react";
import SkeletonCard from "./_components/skeleton-card";
import TodayRevenueCard from "./_components/today-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalStockCard from "./_components/total-stock-card";
import TotalProductsCard from "./_components/total-products-card";
import Last14DaysRevenueCard from "./_components/last-14-days-revenue-card";
import SkeletonChart from "./_components/skeleton-chart";

export default async function Home() {
  const { mostSoldProducts } = await getDashboard();

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
        <Suspense fallback={<SkeletonChart />}>
          <Last14DaysRevenueCard />
        </Suspense>

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
