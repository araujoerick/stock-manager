"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Circle } from "lucide-react";
import ProductTableDropdownMenu from "./table-dropdown-menu";

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
    cell: ({ row }) => {
      const product = row.original;
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price));
    },
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const statusBadge =
        status === "IN_STOCK" ? (
          <Badge className="gap-1.5 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/15">
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
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => <ProductTableDropdownMenu product={row.original} />,
  },
];
