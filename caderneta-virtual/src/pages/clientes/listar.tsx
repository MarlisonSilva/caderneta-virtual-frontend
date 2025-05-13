import Sidebar from "../../components/Siderbar";
import Header from "../../components/Header";

export default function ListaUsuarios() {
    // Simulação de dados estáticos
    const usuarios = [
        { nome: "Matheus", telefone: "(84)90002-9922", email: "matheus@ggyy.com" },
        { nome: "Emanuel", telefone: "(84)90002-9922", email: "emanuel@ggyy.com" },
        { nome: "Juan", telefone: "(84)90002-9922", email: "juan@ggyy.com" },
        // Adicione mais conforme desejar
    ];

    return (
        <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
            <Sidebar />
            <main className="flex-1 p-10">
                <Header />

                <h1 className="text-2xl font-semibold mb-6">Todos os usuários</h1>

                <div className="flex items-center gap-4 mb-6">
                    <select className="border border-[#d1cafe] p-3 rounded-md">
                        <option value="">Filtrar por (opcional)</option>
                        <option value="nome">Nome</option>
                        <option value="email">Email</option>
                        <option value="telefone">Telefone</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Digite seu filtro..."
                        className="border border-[#d1cafe] p-3 rounded-md w-full max-w-sm"
                    />
                    <button className="bg-[#816bff] hover:bg-[#6a55e0] text-white px-6 py-3 rounded-md">
                        Buscar
                    </button>
                </div>

                <div className="bg-white border border-[#ede9ff] rounded-xl shadow-md overflow-x-auto">
                    <table className="min-w-full table-auto text-left">
                        <thead className="bg-[#f0ebff] text-[#1e1e2f]">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Nome</th>
                                <th className="px-6 py-4 font-semibold">Telefone</th>
                                <th className="px-6 py-4 font-semibold">Email</th>
                                <th className="px-6 py-4 font-semibold">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((user, index) => (
                                <tr key={index} className="border-t border-[#ede9ff]">
                                    <td className="px-6 py-4">{user.nome}</td>
                                    <td className="px-6 py-4">{user.telefone}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">
                                        <button className="text-[#816bff] hover:underline">
                                            ver mais
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
