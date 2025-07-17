import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../../../components/Siderbar";
import Header from "../../../components/Header";
import Select, { SingleValue } from "react-select";
import { fetchAPI } from "@/utils/connections";
import { Product } from "@/types/product";
import { SoldProduct } from "@/types/sold_product";
import { User } from "@/types/user";

// —— tipos do formulário ————————————————————————————
type SaleForm = {
  customerId: string;
  date: string;
  installments: number;
  products: SoldProduct[];
};

export default function EditSale() {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState<SaleForm>({
    customerId: "",
    date: "",
    installments: 1,
    products: [],
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<SingleValue<Product>>(null);
  const [selectedUser, setSelectedUser] = useState<SingleValue<User>>(null);
  const [loading, setLoading] = useState(false);

  // —— carregar tudo ——————————————————————————————————
  useEffect(() => {
    if (!id) return;

    async function loadAll() {
      try {
        const [prodData, userData, saleData] = await Promise.all([
          fetchAPI<Product[]>({ path: "/products", method: "GET" }),
          fetchAPI<User[]>({ path: "/users", method: "GET" }),
          fetchAPI<any>({ path: `/sales/${id}`, method: "GET" }),
        ]);

        setProducts(prodData);
        setUsers(userData);

        setForm({
          customerId: saleData.customer.id,
          date: saleData.sale_date,
          installments: saleData.installments_quantity,
          products: saleData.sold_products,
        });

        setSelectedUser(userData.find((u) => u.id === saleData.customer.id) ?? null);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
        alert("Erro ao buscar dados da venda.");
      }
    }

    loadAll();
  }, [id]);

  function handleAddProduct() {
    if (!selectedProduct) return;

    const soldProduct: SoldProduct = {
      id: "", 
      sale: "", 
      product: selectedProduct,
      product_id: selectedProduct.id,
    };

    setForm((prev) => ({
      ...prev,
      products: [...prev.products, soldProduct],
    }));
    setSelectedProduct(null);
  }

  function handleRemoveProduct(index: number) {
    setForm((prev) => ({
      ...prev,
      products: prev.products.filter((_, i) => i !== index),
    }));
  }

  const total = form.products.reduce((sum, sp) => sum + Number(sp.product.price), 0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!selectedUser) {
      alert("Selecione um comprador.");
      return;
    }

    if (!form.products.length) {
      alert("Adicione ao menos um produto.");
      return;
    }

    setLoading(true);
    try {
      await fetchAPI({
        path: `/sales/${id}/`,
        method: "PUT",
        body: {
          customer_id: selectedUser.id,
          sale_date: form.date,
          installments_quantity: form.installments,
          sold_products_ids: form.products.map((sp) => sp.product.id),
        },
      });

      alert("Venda atualizada com sucesso!");
      router.push("/vendas");
    } catch (err) {
      console.error("Erro ao editar venda:", err);
      alert("Erro ao editar venda.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
      <Sidebar />

      <main className="flex-1 p-10 ml-64">
        <Header />

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 max-w-2xl w-full bg-white border border-[#ede9ff] rounded-xl shadow-md p-8 mt-6"
        >
          {/* comprador */}
          <div>
            <label className="block mb-1 font-semibold">Comprador:</label>
            <Select<User, false>
              options={users}
              value={selectedUser}
              onChange={(opt) => setSelectedUser(opt)}
              getOptionLabel={(u) => u.name}
              getOptionValue={(u) => u.id}
              placeholder="Buscar comprador..."
              isDisabled={loading}
              isSearchable
            />
          </div>

          {/* data */}
          <div>
            <label htmlFor="date" className="block mb-1 font-semibold">
              Data da venda:
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={form.date.split("T")[0]}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full border border-[#d1cafe] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              required
              disabled={loading}
            />
          </div>

          {/* parcelas */}
          <div>
            <label htmlFor="installments" className="block mb-1 font-semibold">
              Quantidade de parcelas:
            </label>
            <input
              id="installments"
              name="installments"
              type="number"
              min={1}
              value={form.installments}
              onChange={(e) => setForm({ ...form, installments: Number(e.target.value) })}
              className="w-full border border-[#d1cafe] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#816bff]"
              required
              disabled={loading}
            />
          </div>

          {/* produtos */}
          <div>
            <label className="block mb-1 font-semibold">Produtos:</label>
            <div className="flex">
              <Select<Product, false>
                options={products}
                value={selectedProduct}
                onChange={(opt) => setSelectedProduct(opt)}
                getOptionLabel={(p) => p.name}
                getOptionValue={(p) => p.id.toString()}
                placeholder="Buscar produto..."
                className="me-2 flex-1"
                isDisabled={loading}
                isSearchable
              />
              <button
                type="button"
                onClick={handleAddProduct}
                disabled={!selectedProduct || loading}
                className="bg-[#816bff] hover:bg-[#6a55e0] text-white font-medium px-5 py-3 rounded-md transition disabled:opacity-50"
              >
                +
              </button>
            </div>
          </div>

          {/* lista de itens */}
          {!!form.products.length && (
            <div className="border border-[#d1cafe] rounded-md p-4">
              {form.products.map((sp, i) => (
                <div
                  key={`${sp.product.id}-${i}`}
                  className="flex justify-between items-center mb-2 last:mb-0"
                >
                  <span>
                    1× {sp.product.name} — R$ {Number(sp.product.price).toFixed(2)}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveProduct(i)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    remover
                  </button>
                </div>
              ))}

              <hr className="my-2" />
              <div className="font-semibold text-right">
                Total: R$ {total.toFixed(2)}
              </div>
            </div>
          )}

          {/* submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#816bff] hover:bg-[#6a55e0] text-white font-medium px-6 py-3 rounded-md transition disabled:opacity-50"
            >
              {loading ? "Salvando..." : "Atualizar"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
