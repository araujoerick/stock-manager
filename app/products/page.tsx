import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const products = await db.product.findMany();

  return (
    <section className="w-[1188px] space-y-5 p-8">
      <div className="flex w-full justify-between">
        <div className="space-y-2">
          <span className="text-xs font-semibold text-[#00A180]">Produtos</span>
          <h1 className="text-xl font-semibold text-slate-900">
            Gestão de produtos
          </h1>
        </div>
        <Button className="self-end">
          <PlusIcon />
          Novo produto
        </Button>
      </div>
      <DataTable columns={productTableColumns} data={products} />
    </section>
  );
};

export default ProductsPage;
