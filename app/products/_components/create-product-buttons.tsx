"use client";

import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import UpsertProductDialogContent from "./upsert-dialog-content";

const CreateProductButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="self-end">
          <PlusIcon />
          Novo produto
        </Button>
      </DialogTrigger>
      <UpsertProductDialogContent onSuccess={() => setDialogIsOpen(false)} />
    </Dialog>
  );
};

export default CreateProductButton;
