import { getProducts } from "../_data-access/product/get-products";
import { ComboboxOption } from "../_components/ui/combobox";
import UpsertSaleButton from "./_components/create-sale-button";
import { DataTable } from "../_components/ui/data-table";
import { saleTableColumns } from "./_components/table-columns";
import { getSales } from "../_data-access/sale/get-sales";

const SalesPage = async () => {
  const sales = await getSales();
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    value: product.id,
    label: product.name,
  }));

  const tableData = sales.map((sale) => ({
    ...sale,
    products,
    productOptions,
  }));

  return (
    <section className="w-[1188px] space-y-5 p-8">
      <div className="flex w-full justify-between">
        <div className="space-y-2">
          <span className="text-xs font-semibold text-primary">Vendas</span>
          <h1 className="text-xl font-semibold text-slate-900">
            Gestão de Vendas
          </h1>
        </div>
        <UpsertSaleButton products={products} productOptions={productOptions} />
      </div>
      <DataTable columns={saleTableColumns} data={tableData} />
    </section>
  );
};

export default SalesPage;
