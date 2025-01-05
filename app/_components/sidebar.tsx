import React from "react";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white">
      <div>
        <h1 className="px-8 py-6 text-2xl font-extrabold text-[#00a180]">
          STOCKLY
        </h1>
      </div>
      <div className="flex flex-col gap-2 p-2.5">
        <Button variant="ghost" className="justify-start">
          Dashboard
        </Button>
        <Button variant="ghost" className="justify-start">
          Produtos
        </Button>
        <Button variant="ghost" className="justify-start">
          Vendas
        </Button>
        <button className="rounded-lg bg-[#00a180]/10 px-6 py-3 text-left text-[#00a180]">
          Dashboard
        </button>
        <button className="rounded-lg bg-[#00a180]/10 px-6 py-3 text-left text-[#00a180]">
          Produtos
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
