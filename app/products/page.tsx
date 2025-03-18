import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import CreateProductButton from "./_components/create-product-buttons";
import Header from "../_components/header";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <section className="w-[1188px] space-y-5 p-8">
      <Header title="Gestão de produtos" subtitle="Produtos">
        <CreateProductButton />
      </Header>
      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </section>
  );
};

export default ProductsPage;
