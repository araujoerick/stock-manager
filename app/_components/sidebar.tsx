import { LayoutGrid, Package, ShoppingBasket } from "lucide-react";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <aside className="min-h-screen w-64 bg-white">
      <div>
        <h1 className="hidden px-8 py-6 text-2xl font-extrabold text-primary md:inline-block">
          STOCK MANAGER
        </h1>
        <h1 className="mt-5 px-4 py-3 text-center text-2xl font-extrabold text-primary md:hidden">
          SM
        </h1>
      </div>
      <div className="flex flex-col gap-2 p-2.5">
        <SidebarButton href="/" icon={<LayoutGrid size={20} />}>
          Dashboard
        </SidebarButton>
        <SidebarButton href="/products" icon={<Package size={20} />}>
          Produtos
        </SidebarButton>
        <SidebarButton href="/sales" icon={<ShoppingBasket size={20} />}>
          Vendas
        </SidebarButton>
      </div>
    </aside>
  );
};

export default Sidebar;
