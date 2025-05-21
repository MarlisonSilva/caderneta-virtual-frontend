import { Produto } from "@/types/product";
import { fetchAPI } from "@/utils/connections";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductTable() {
  const [produtos, setProdutos] = useState<Produto[] | null>([]);


  useEffect(() => {
    fetchAPI<Produto[]>({
      path: `/products`,
      method: "GET",
    })
      .then((data) => {
        setProdutos(data ?? null);
        console.log(data);
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err);
      });
  }, []);

  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-[#ede9ff] shadow-md">
      <table className="w-full text-sm text-left text-[#1e1e2f] min-w-[600px]">
        <thead className="bg-[#816bff] text-white uppercase text-xs tracking-wide">
          <tr>
            <th className="px-6 py-4">Nome</th>
            <th className="px-6 py-4">Categoria</th>
            <th className="px-6 py-4">Cor</th>
            <th className="px-6 py-4">Capacidade</th>
            <th className="px-6 py-4 text-right">Ação</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#f1efff]">
          {produtos?.map((p) => (
            <tr
              key={p.id}
              className="hover:bg-[#f7f6fc] transition-colors duration-150"
            >
              <td className="px-6 py-4 font-medium text-[#5e5e7f]">{p.name}</td>
              <td className="px-6 py-4">{p.category.name}</td>
              <td className="px-6 py-4">{p.color.name}</td>
              <td className="px-6 py-4">{p.capacity}</td>
              <td className="px-6 py-4 text-right">
                <Link
                  href={`/produtos/${p.id}`}
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
