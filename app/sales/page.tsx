import { getProducts } from "../_data-access/product/get-products";
import { ComboboxOption } from "../_components/ui/combobox";
import CreateSaleButton from "./_components/create-sale-button";

const SalesPage = async () => {
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    value: product.id,
    label: product.name,
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
        <CreateSaleButton products={products} productOptions={productOptions} />
      </div>
      {/* <DataTable
    columns={productTableColumns}
    data={JSON.parse(JSON.stringify(products))}
  /> */}
    </section>
  );
};

export default SalesPage;
