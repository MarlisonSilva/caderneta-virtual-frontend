import Link from "next/link";
import vendas from "@/data/vendas";

export default function SaleTable() {
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-[#ede9ff] shadow-md">
      <table className="w-full text-sm text-left text-[#1e1e2f] min-w-[600px]">
        <thead className="bg-[#816bff] text-white uppercase text-xs tracking-wide">
          <tr>
            <th className="px-6 py-4">Cliente</th>
            <th className="px-6 py-4">Data</th>
            <th className="px-6 py-4">Parcelas</th>
            <th className="px-6 py-4">Produto</th>
            <th className="px-6 py-4 text-right">Ação</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#f1efff]">
          {vendas.map((venda) => (
            <tr
              key={venda.id}
              className="hover:bg-[#f7f6fc] transition-colors duration-150"
            >
              <td className="px-6 py-4 font-medium text-[#5e5e7f]">
                {venda.cliente}
              </td>
              <td className="px-6 py-4">{venda.data}</td>
              <td className="px-6 py-4">{venda.quantidade_parcelas}</td>
              <td className="px-6 py-4">{venda.produtos}</td>
              <td className="px-6 py-4 text-right">
                <Link
                  href={`/vendas/${venda.id}`}
                  className="text-[#816bff] hover:underline hover:text-[#6a55e0] font-medium transition"
                >
                  Ver detalhes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
