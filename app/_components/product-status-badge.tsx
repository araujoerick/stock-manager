import React from "react";
import { Badge } from "./ui/badge";
import { Circle } from "lucide-react";
import { ProductStatusDto } from "../_data-access/product/get-products";

interface ProductStatusBadgeProps {
  status: ProductStatusDto;
}

const ProductStatusBadge = ({ status }: ProductStatusBadgeProps) => {
  const statusBadge =
    status === "IN_STOCK" ? (
      <Badge className="gap-1.5 bg-brand-primary/10 text-primary hover:bg-brand-primary/15">
        <Circle size={10} className="fill-current" />
        Em estoque
      </Badge>
    ) : (
      <Badge className="gap-1.5 bg-slate-500/10 text-slate-500 hover:bg-slate-500/15">
        <Circle size={10} className="fill-current" />
        Esgotado
      </Badge>
    );
  return statusBadge;
};

export default ProductStatusBadge;
