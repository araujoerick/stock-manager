import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white">
      <div>
        <h1 className="text-[#00a180] text-2xl font-extrabold px-8 py-6">
          STOCKLY
        </h1>
      </div>
      <div className="flex flex-col gap-2 p-2.5">
        <button className="text-[#00a180] bg-[#00a180]/10 py-3 px-6 text-left rounded-lg">
          Dashboard
        </button>
        <button className="text-[#00a180] bg-[#00a180]/10 py-3 px-6 text-left rounded-lg">
          Produtos
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
