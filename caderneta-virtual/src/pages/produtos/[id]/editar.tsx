import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Siderbar";
import Header from "../../../components/Header";
import { products } from "../../../data/products";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({
    name: "",
    category: "",
    color: "",
    capacity: "",
  });

  useEffect(() => {
    if (id) {
      const product = products.find((p) => p.id === id);
      if (product) {
        setForm({
          name: product.nome,
          category: product.categoria,
          color: product.cor,
          capacity: product.capacidade,
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
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="border border-[#d1cafe] bg-white rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Categoria:
            </label>
            <input
              name="category"
              type="text"
              value={form.category}
              onChange={handleChange}
              className="border border-[#d1cafe] bg-white rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">Cor:</label>
            <input
              name="color"
              type="text"
              value={form.color}
              onChange={handleChange}
              className="border border-[#d1cafe] bg-white rounded-md p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#1e1e2f]">
              Capacidade:
            </label>
            <input
              name="capacity"
              type="text"
              value={form.capacity}
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
