import Sidebar from "../../components/Siderbar";
import Header from "../../components/Header";

export default function CadastroUsuario() {
  return (
    <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
      <Sidebar />

      <main className="flex-1 p-10">
        <Header />

        <form className="grid gap-6 max-w-2xl w-full bg-white border border-[#ede9ff] rounded-xl shadow-md p-8 mt-6">

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Nome:
            </label>
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full border border-[#d1cafe] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Email:
            </label>
            <input
              type="email"
              placeholder="Email do usuário"
              className="w-full border border-[#d1cafe] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold text-[#1e1e2f]">
                Telefone:
              </label>
              <input
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
                className="w-full border border-[#d1cafe] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-[#1e1e2f]">
                Senha:
              </label>
              <input
                type="password"
                placeholder="Senha de acesso"
                className="w-full border border-[#d1cafe] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block mb-1 font-semibold text-[#1e1e2f]">UF:</label>
              <input
                type="text"
                placeholder="RN"
                maxLength={2}
                className="w-full border border-[#d1cafe] rounded-md p-3 uppercase focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-[#1e1e2f]">CEP:</label>
              <input
                type="text"
                placeholder="59000-000"
                className="w-full border border-[#d1cafe] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
            </div>

            <div className="col-span-2">
              <label className="block mb-1 font-semibold text-[#1e1e2f]">Rua:</label>
              <input
                type="text"
                placeholder="Nome da rua"
                className="w-full border border-[#d1cafe] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <label className="block mb-1 font-semibold text-[#1e1e2f]">Nº:</label>
              <input
                type="text"
                placeholder="123"
                className="w-full border border-[#d1cafe] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              />
            </div>
          </div>
