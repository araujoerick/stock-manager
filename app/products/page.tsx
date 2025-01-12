import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../_components/ui/dialog";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <section className="w-[1188px] space-y-5 p-8">
      <div className="flex w-full justify-between">
        <div className="space-y-2">
          <span className="text-xs font-semibold text-[#00A180]">Produtos</span>
          <h1 className="text-xl font-semibold text-slate-900">
            Gestão de produtos
          </h1>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="self-end">
              <PlusIcon />
              Novo produto
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar novo produto</DialogTitle>
              <DialogDescription>
                Insira as informações do produto.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </section>
  );
};

export default ProductsPage;
