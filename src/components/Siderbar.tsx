import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    { label: "Produtos", path: "/produtos" },
    { label: "Vendas", path: "/vendas" },
    { label: "Categorias", path: "/categorias" },
    { label: "Cores", path: "/cores" },
    { label: "Unidades", path: "/unidades" },
    { label: "Usuários", path: "/usuarios" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#6a55e0] text-white p-6 flex flex-col justify-between shadow-lg">
      <div>
        <h2 className="text-lg font-bold mb-8 tracking-wide">
          CADERNETA VIRTUAL
        </h2>
        <ul className="space-y-4 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => router.push(item.path)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer ${router.pathname.startsWith(item.path)
                    ? "bg-white text-[#6a55e0] font-semibold"
                    : "hover:bg-[#7c69ef]"
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => router.push("/auth/login")}
        className="mt-10 text-sm text-red-200 hover:text-red-100 transition"
      >
        SAIR
      </button>
    </aside>
  );
}
