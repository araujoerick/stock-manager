import { db } from "@/app/_lib/prisma";

export const getTotalProducts = async () => {
  const totalProducts = await db.product.count();

  return totalProducts;
};
