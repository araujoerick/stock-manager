import { LayoutGrid, Package, ShoppingBasket } from "lucide-react";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-white">
      <div>
        <h1 className="px-8 py-6 text-2xl font-extrabold text-[#00a180]">
          STOCKLY
        </h1>
      </div>
      <div className="flex flex-col gap-2 p-2.5">
        <SidebarButton href="/">
          <LayoutGrid size={20} />
          Dashboard
        </SidebarButton>
        <SidebarButton href="/products">
          <Package size={20} />
          Produtos
        </SidebarButton>
        <SidebarButton href="/sales">
          <ShoppingBasket size={20} />
          Vendas
        </SidebarButton>
      </div>
    </aside>
  );
};

export default Sidebar;
