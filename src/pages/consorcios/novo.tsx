import Sidebar from "../../components/Siderbar";
import Header from "../../components/Header";

export default function CreateConsortium() {
  return (
    <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
      <Sidebar />

      <main className="flex-1 p-10">
        <Header />

        <form className="grid gap-6 max-w-4xl w-full bg-white border border-[#ede9ff] rounded-xl shadow-md p-8 mt-6">
          {/* Linha: Nome do consórcio e Produto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold text-[#1e1e2f]">
                Nome do consórcio:
              </label>
              <input
                type="text"
                placeholder="ex: Consórcio premiado"
                className="w-full border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#1e1e2f]">
                Produto:
              </label>
              <select
                className="w-full border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              >
                <option value="">Selecione um produto</option>
                <option value="carro">Garrafa</option>
                <option value="moto">Vasilha</option>
                <option value="casa">Pote</option>
              </select>
            </div>
          </div>

          {/* Linha: Valor total e Quantidade de parcelas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold text-[#1e1e2f]">
                Valor Total do Consórcio:
              </label>
              <input
                type="number"
                placeholder="ex: 1200,00"
                className="w-full border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#1e1e2f]">
                Quantidade de Parcelas:
              </label>
              <input
                type="number"
                placeholder="ex: 12"
                className="w-full border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
            </div>
          </div>

          {/* Linha: Data de início */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold text-[#1e1e2f]">
                Data de Início:
              </label>
              <input
                type="date"
                className="w-full border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
            </div>
          </div>

          {/* Seção de busca e adição de clientes */}
          <div>
            <label className="block mb-2 font-semibold text-[#1e1e2f]">
              Buscar Cliente:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Digite o nome do cliente"
                className="flex-1 border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
              <button
                type="button"
                className="bg-[#816bff] hover:bg-[#6a55e0] text-white font-medium px-4 py-2 rounded-md transition duration-200 shadow-sm"
              >
                Adicionar
              </button>
            </div>
          </div>

          {/* Lista de clientes adicionados */}
          <div>
            <label className="block mb-2 font-semibold text-[#1e1e2f]">
              Clientes Adicionados:
            </label>
            <div className="border border-[#d1cafe] bg-[#f9f8ff] rounded-md p-4 space-y-2 max-h-60 overflow-y-auto">
              <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm border border-[#e0dfff]">
                <span className="text-[#1e1e2f] font-medium">João da Silva</span>
                <button
                  type="button"
                  className="text-red-600 hover:text-red-800 font-semibold text-sm"
                >
                  Remover
                </button>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm border border-[#e0dfff]">
                <span className="text-[#1e1e2f] font-medium">Maria Oliveira</span>
                <button
                  type="button"
                  className="text-red-600 hover:text-red-800 font-semibold text-sm"
                >
                  Remover
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#816bff] hover:bg-[#6a55e0] text-white font-medium px-6 py-3 rounded-md transition duration-200 shadow-sm"
            >
              Cadastrar Consórcio
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
