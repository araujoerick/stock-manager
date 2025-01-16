import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/app/_components/ui/sheet";
import React from "react";

const UpsertSheetContent = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Nova Venda</SheetTitle>
        <SheetDescription>
          Preencha os campos abaixo para adicionar uma nova venda.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default UpsertSheetContent;
