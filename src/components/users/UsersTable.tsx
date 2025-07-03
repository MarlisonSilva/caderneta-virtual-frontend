// src/components/usuarios/UserTable.tsx
import Link from "next/link";
import users from "../../data/users";

export default function UsersTable() {
    return (
        <div className="overflow-x-auto bg-white rounded-xl border border-[#ede9ff] shadow-md">
            <table className="w-full text-sm text-left text-[#1e1e2f] min-w-[600px]">
                <thead className="bg-[#816bff] text-white uppercase text-xs tracking-wide">
                    <tr>
                        <th className="px-6 py-4">Nome</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Telefone</th>
                        <th className="px-6 py-4 text-right">Ação</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#f1efff]">
                    {users.map((u, i) => (
                        <tr key={u.id} className="hover:bg-[#f7f6fc] transition-colors duration-150">
                            <td className="px-6 py-4 font-medium text-[#5e5e7f]">{u.nome}</td>
                            <td className="px-6 py-4">{u.email}</td>
                            <td className="px-6 py-4">{u.telefone}</td>
                            <td className="px-6 py-4 text-right">
                                <Link
                                    href={`/usuarios/${u.id}`}
                                    className="text-[#816bff] hover:underline hover:text-[#6a55e0] font-medium transition"
                                >
                                    Ver detalhes
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
