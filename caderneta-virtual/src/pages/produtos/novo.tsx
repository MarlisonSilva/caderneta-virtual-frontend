import Sidebar from "../../components/Siderbar";
import Header from "../../components/Header";

export default function CadastroProduto() {
  return (
    <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
      <Sidebar />

      <main className="flex-1 p-10">
        <Header />

        <form className="grid gap-6 max-w-2xl w-full bg-white border border-[#ede9ff] rounded-xl shadow-md p-8 mt-6">
          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Nome do Produto:
            </label>
            <input
              type="text"
              placeholder="Nome do produto"
              className="w-full border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Categoria:
            </label>
            <input
              type="text"
              placeholder="Tipo (ex: Garrafa, Pote)"
              className="w-full border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Cor:
            </label>
            <input
              type="text"
              placeholder="Cor"
              className="w-full border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Capacidade e unidade de medida:
            </label>
            <input
              type="text"
              placeholder="Tamanho (ex: 310ml, 1,2L)"
              className="w-full border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#816bff] hover:bg-[#6a55e0] text-white font-medium px-6 py-3 rounded-md transition duration-200 shadow-sm"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
