"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Circle } from "lucide-react";

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);
      return <div className="">{formatted}</div>;
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
          <Badge className="gap-1.5 bg-[#00A180]/10 text-[#00A180] hover:bg-[#00A180]/15">
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
    accessorKey: "",
    header: "Ações",
  },
];
