import { db } from "@/app/_lib/prisma";

export const getTotalProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const totalProducts = await db.product.count();

  return totalProducts;
};
