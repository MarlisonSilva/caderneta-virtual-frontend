import Sidebar from "../../components/Siderbar";
import Header from "../../components/Header";
import Select from "react-select";

const produtos = [
  { value: 'garrafa_rosa_325ml', label: 'Garrafa Rosa 325 ml' },
  { value: 'caneca_branca', label: 'Caneca Branca' },
  { value: 'camiseta_preta_p', label: 'Camiseta Preta P' },
];

export default function CadastroProduto() {
  return (
    <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
      <Sidebar />

      <main className="flex-1 p-10">
        <Header />

        <form className="grid gap-6 max-w-2xl w-full bg-white border border-[#ede9ff] rounded-xl shadow-md p-8 mt-6">
          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Comprador:
            </label>
            <input
              type="text"
              placeholder="Nome do cliente comprador"
              className="w-full border border-[#d1cafe] bg-white text-[#1e1e2f] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Data da venda:
            </label>
            <input
              name="data"
              type="date"
              placeholder="Data de realização da venda"
              className="border border-[#d1cafe] bg-white rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Quantidade de parcelas:
            </label>
            <input
              name="quantidade_parcelas"
              type="number"
              placeholder="Quantidade de parcelas" 
              className="border border-[#d1cafe] bg-white rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Produtos:
            </label>
            <div className="flex">
              <Select
                options={produtos}
                className="me-2 w-full"
                placeholder="Buscar produto(s)..."
              />
              <button
                type="submit"
                className="bg-[#816bff] hover:bg-[#6a55e0] text-white font-medium px-6 py-3 rounded-md transition duration-200 shadow-sm"
              >
                +
              </button>
            </div>
          </div>
          <div>
            1x Garrafa EcoTupper azul 325 ml <br/>
            1x Pote Cristalwave rosa 1,2 L <br/>
            ...
          </div>
          <div>
            Valor total: <br/>
            120,00
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
