import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import AddProductButton from "./_components/add-product-buttons";

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
        <AddProductButton />
      </div>
      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </section>
  );
};

export default ProductsPage;
