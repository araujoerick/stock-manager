"server-only";

import { db } from "@/app/_lib/prisma";
import dayjs from "dayjs";
import { ProductStatusDto } from "../product/get-products";

export interface DayTotalRevenue {
  day: string;
  totalRevenue: number;
}

export interface MostSoldProductDto {
  name: string;
  totalSold: number;
  status: ProductStatusDto;
  price: number;
  productId: string;
}

interface DashboardDto {
  totalLast14DaysRevenue: DayTotalRevenue[];
  mostSoldProducts: MostSoldProductDto[];
}

export const getDashboard = async (): Promise<DashboardDto> => {
  const today = dayjs().endOf("day").toDate();
  const last14Days = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(
    (day) => {
      return dayjs(today).subtract(day, "day");
    },
  );

  const totalLast14DaysRevenue: DayTotalRevenue[] = [];

  for (const day of last14Days) {
    const dayTotalRevenue = await db.$queryRawUnsafe<
      { totalRevenue: number }[]
    >(
      `
      SELECT SUM("SaleProduct"."unitPrice" * "SaleProduct"."quantity") as "totalRevenue"
      FROM "SaleProduct"
      JOIN "Sale" ON "SaleProduct"."saleId" = "Sale"."id"
      WHERE "Sale"."date" >= $1 AND "Sale"."date" <= $2;
      `,
      day.startOf("day").toDate(),
      day.endOf("day").toDate(),
    );
    totalLast14DaysRevenue.push({
      day: day.format("DD/MM"),
      totalRevenue: Number(dayTotalRevenue[0].totalRevenue),
    });
  }

  const mostSoldProductsQuery = `
  SELECT "Product"."name", SUM("SaleProduct"."quantity") as "totalSold", "Product"."price", "Product"."stock", "Product"."id" as "productId"
  FROM "SaleProduct"
  JOIN "Product" ON "SaleProduct"."productId" = "Product"."id"
  GROUP BY "Product"."name", "Product"."price", "Product"."stock", "Product"."id"
  ORDER BY "totalSold" DESC
  LIMIT 5;
`;
  const mostSoldProductsPromise = db.$queryRawUnsafe<
    {
      name: string;
      totalSold: number;
      price: number;
      stock: number;
      productId: string;
    }[]
  >(mostSoldProductsQuery);

  const [mostSoldProducts] = await Promise.all([mostSoldProductsPromise]);

  return {
    totalLast14DaysRevenue,
    mostSoldProducts: mostSoldProducts.map((mostSoldProduct) => ({
      ...mostSoldProduct,
      price: Number(mostSoldProduct.price),
      totalSold: Number(mostSoldProduct.totalSold),
      status: mostSoldProduct.stock <= 0 ? "OUT_OF_STOCK" : "IN_STOCK",
    })),
  };
};
