import { db } from "@/app/_lib/prisma";
import "server-only";
import { ProductStatusDto } from "../product/get-products";

export interface MostSoldProductDto {
  name: string;
  totalSold: number;
  status: ProductStatusDto;
  price: number;
  productId: string;
}

export const getMostSoldProducts = async (): Promise<MostSoldProductDto[]> => {
  const mostSoldProductsQuery = `
  SELECT "Product"."name", SUM("SaleProduct"."quantity") as "totalSold", "Product"."price", "Product"."stock", "Product"."id" as "productId"
  FROM "SaleProduct"
  JOIN "Product" ON "SaleProduct"."productId" = "Product"."id"
  GROUP BY "Product"."name", "Product"."price", "Product"."stock", "Product"."id"
  ORDER BY "totalSold" DESC
  LIMIT 5;
`;
  const mostSoldProducts = await db.$queryRawUnsafe<
    {
      name: string;
      totalSold: number;
      price: number;
      stock: number;
      productId: string;
    }[]
  >(mostSoldProductsQuery);

  return mostSoldProducts.map((mostSoldProduct) => ({
    ...mostSoldProduct,
    price: Number(mostSoldProduct.price),
    totalSold: Number(mostSoldProduct.totalSold),
    status: mostSoldProduct.stock <= 0 ? "OUT_OF_STOCK" : "IN_STOCK",
  }));
};
