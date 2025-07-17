import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline"; // Corrigindo a importação para a versão 2.x
import { useToken } from "@/hooks/useToken";

export default function Header() {
  const { token } = useToken();
  return (
    <div className="flex justify-between items-center mb-8 px-6 py-4 bg-white shadow-md rounded-md">
      <div className="text-sm text-[#6a55e0]">
        <span className="font-medium">
          Bem-vindo, <strong>{token?.user_name ?? ""}</strong>
        </span>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/profile">
          <button className="flex items-center justify-center bg-[#816bff] hover:bg-[#6a55e0] text-white p-2 rounded-full transition-all">
            <UserIcon className="h-6 w-6" />
          </button>
        </Link>
      </div>
    </div>
  );
}
