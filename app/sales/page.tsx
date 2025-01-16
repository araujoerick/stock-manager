import React from "react";
import { Button } from "../_components/ui/button";
import { Sheet, SheetTrigger } from "../_components/ui/sheet";
import UpsertSheetContent from "./_components/upsert-sheet-content";

const SalesPage = () => {
  return (
    <section className="w-[1188px] space-y-5 p-8">
      <div className="flex w-full justify-between">
        <div className="space-y-2">
          <span className="text-xs font-semibold text-brand-primary">
            Vendas
          </span>
          <h1 className="text-xl font-semibold text-slate-900">
            Gestão de Vendas
          </h1>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Nova Venda</Button>
          </SheetTrigger>
          <UpsertSheetContent />
        </Sheet>
      </div>
      {/* <DataTable
    columns={productTableColumns}
    data={JSON.parse(JSON.stringify(products))}
  /> */}
    </section>
  );
};

export default SalesPage;
