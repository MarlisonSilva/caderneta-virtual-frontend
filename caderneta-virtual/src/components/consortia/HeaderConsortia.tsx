import Link from "next/link";

export default function HeaderConsortia() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-[#1e1e2f]">Todos os Consorcios</h1>
      <Link href="/consorcios/novo">
        <button className="bg-[#816bff] hover:bg-[#6a55e0] text-white px-6 py-2 rounded-md shadow-sm transition-all font-medium">
          <span>+</span> <span className="ms-2">Novo Consorcio</span>
        </button>
      </Link>
    </div>
  );
}
