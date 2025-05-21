import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Siderbar";
import Header from "../../../components/Header";
import { produtos } from "../../../data/produtos";

export default function EditarProduto() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({
    nome: "",
    categoria: "",
    cor: "",
    capacidade: "",
  });

  useEffect(() => {
    if (id) {
      const produto = produtos.find((p) => p.id === id);
      if (produto) {
        setForm({
          nome: produto.nome,
          categoria: produto.categoria,
          cor: produto.cor,
          capacidade: produto.capacidade,
        });
      }
    }
  }, [id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Produto atualizado:", form);
    alert("Produto atualizado com sucesso!");
    router.push(`/produtos/${id}`);
  }

  return (
    <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
      <Sidebar />

      <main className="flex-1 p-10">
        <Header />
        <h1 className="text-2xl font-bold mb-6">Editar Produto</h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 max-w-2xl bg-white border border-[#ede9ff] rounded-xl shadow-md p-8"
        >
          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Nome:
            </label>
            <input
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              className="border border-[#d1cafe] bg-white rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Categoria:
            </label>
            <input
              name="categoria"
              type="text"
              value={form.categoria}
              onChange={handleChange}
              className="border border-[#d1cafe] bg-white rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Cor:
            </label>
            <input
              name="cor"
              type="text"
              value={form.cor}
              onChange={handleChange}
              className="border border-[#d1cafe] bg-white rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Capacidade:
            </label>
            <input
              name="capacidade"
              type="text"
              value={form.capacidade}
              onChange={handleChange}
              className="border border-[#d1cafe] bg-white rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md shadow-sm transition"
            >
              Salvar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
