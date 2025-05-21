import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Siderbar";
import Header from "@/components/Header";
import consorcios from "@/data/consorcios"; // Altere para o caminho correto do seu array de consórcios
type Consorcio = typeof consorcios[number];

export default function ConsorcioDetalhes() {
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const [consorcio, setConsorcio] = useState<Consorcio | null | undefined>(null);

  useEffect(() => {
    if (id) {
      const encontrado = consorcios.find((c) => c.id === id);
      setConsorcio(encontrado ?? null);
    }
  }, [id]);

  if (!consorcio)
    return (
      <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
        <Sidebar />
        <main className="flex-1 p-10">
          <Header />
          <p className="text-lg text-[#5e5e7f]">Carregando consórcio...</p>
        </main>
      </div>
    );

  return (
    <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
      <Sidebar />

      <main className="flex-1 p-10">
        {showConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md text-center border border-[#ede9ff]">
              <h2 className="text-xl font-semibold mb-3">
                Deseja realmente remover este consórcio?
              </h2>
              <p className="text-[#5e5e7f] mb-6">
                Essa ação não poderá ser desfeita.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 bg-gray-200 text-[#1e1e2f] rounded-md hover:bg-gray-300 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    // lógica de delete
                    alert("Consórcio removido!");
                    setShowConfirm(false);
                    router.push("/consorcios");
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Apagar
                </button>
              </div>
            </div>
          </div>
        )}

        <Header />

        <h1 className="text-2xl font-bold mb-6">Detalhes do Consórcio</h1>

        <div className="bg-white rounded-xl border border-[#ede9ff] p-6 shadow-md space-y-3 max-w-2xl">
          <p>
            <span className="font-semibold text-[#5e5e7f]">Nome:</span>{" "}
            {consorcio.nome}
          </p>
          <p>
            <span className="font-semibold text-[#5e5e7f]">Data de início:</span>{" "}
            {consorcio.data}
          </p>
          <p>
            <span className="font-semibold text-[#5e5e7f]">Produto:</span>{" "}
            {consorcio.produto}
          </p>
          <p>
            <span className="font-semibold text-[#5e5e7f]">Valor total:</span>{" "}
            R$ {consorcio.valor_total}
          </p>
          <p>
            <span className="font-semibold text-[#5e5e7f]">Quant. Parcelas:</span>{" "}
            {consorcio.quantidade_parcelas}
          </p>
          <p>
            <span className="font-semibold text-[#5e5e7f]">Categoria:</span>{" "}
            {consorcio.categoria}
          </p>
          <p>
            <span className="font-semibold text-[#5e5e7f]">Status:</span>{" "}
            {consorcio.status}
          </p>
        </div>

        <div className="flex justify-end mt-8 gap-4">
          <button
            onClick={() => router.push(`/consorcios/${id}/editar`)}
            className="bg-[#ffb347] hover:bg-[#fca937] text-white font-medium px-6 py-2 rounded-md shadow-sm transition"
          >
            Atualizar
          </button>
          <button
            onClick={() => setShowConfirm(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md shadow-sm transition"
          >
            Apagar
          </button>
        </div>
      </main>
    </div>
  );
}
