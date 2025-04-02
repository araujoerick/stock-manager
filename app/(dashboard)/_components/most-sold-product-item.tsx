import ProductStatusBadge from "@/app/_components/product-status-badge";
import { MostSoldProductDto } from "@/app/_data-access/dashboard/get-dashboard";
import { formatCurrency } from "@/app/_helpers/currency";

interface MostSoldProductItemProps {
  product: MostSoldProductDto;
}

const MostSoldProductItem = ({ product }: MostSoldProductItemProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-2">
        <ProductStatusBadge status={product.status} />
        <div>
          <p className="font-semibold">{product.name}</p>
          <p className="text-sm font-medium text-slate-500">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
      <p className="text-sm font-semibold">
        {product.totalSold}
        {product.totalSold > 1 ? " vendidos" : " vendido"}
      </p>
    </div>
  );
};

export default MostSoldProductItem;
