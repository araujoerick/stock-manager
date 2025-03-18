import { getProducts } from "../_data-access/product/get-products";
import { ComboboxOption } from "../_components/ui/combobox";
import UpsertSaleButton from "./_components/create-sale-button";
import { DataTable } from "../_components/ui/data-table";
import { saleTableColumns } from "./_components/table-columns";
import { getSales } from "../_data-access/sale/get-sales";
import Header from "../_components/header";

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
      <Header title="Gestão de vendas" subtitle="Vendas">
        <UpsertSaleButton products={products} productOptions={productOptions} />
      </Header>
      <DataTable columns={saleTableColumns} data={tableData} />
    </section>
  );
};

export default SalesPage;
