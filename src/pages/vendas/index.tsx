// src/pages/vendas.tsx
import Sidebar from "@/components/Siderbar";
import Header from "@/components/Header";
import HeaderSales from "@/components/sales/HeaderSales";
import SalesTable from "@/components/sales/SalesTable";

export default function ListSales() {
  return (
    <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
      <Sidebar />

      <main className="flex-1 p-10 {* space-y-6 *}">
        <Header />
        <HeaderSales />

        <div className="bg-white rounded-xl shadow-md p-6 border border-[#ede9ff]">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <select className="border border-[#d1cafe] bg-[#f7f6fc] text-[#1e1e2f] rounded-md p-2 w-full md:w-48 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]">
                <option>Data</option>
                <option>Comprador</option>
                <option>Item</option>
                
              </select>

            <input
              type="text"
              placeholder="Digite para buscar"
              className="border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-2 w-full flex-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />

            <button className="bg-[#816bff] hover:bg-[#6a55e0] text-white font-medium rounded-md px-6 py-2 transition duration-200 shadow-sm">
              Buscar
            </button>
          </div>

          <SalesTable />
        </div>
      </main>
    </div>
  );
}
