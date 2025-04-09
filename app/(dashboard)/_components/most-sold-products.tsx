import { getMostSoldProducts } from "@/app/_data-access/dashboard/get-most-sold-products";
import React from "react";
import MostSoldProductItem from "./most-sold-product-item";
import { Skeleton } from "@/app/_components/ui/skeleton";

const MostSoldProducts = async () => {
  const mostSoldProducts = await getMostSoldProducts();

  return (
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
  );
};

export const MostSoldProductsSkeleton = () => {
  return (
    <div className="flex h-full flex-col gap-6 rounded-xl bg-white p-6">
      <Skeleton className="h-6 w-52" />
      <div className="space-y-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex animate-pulse items-center justify-between gap-4"
          >
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostSoldProducts;
