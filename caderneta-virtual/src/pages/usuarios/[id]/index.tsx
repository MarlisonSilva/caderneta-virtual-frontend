import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Siderbar";
import Header from "@/components/Header";
import { usuarios } from "@/data/usuarios";

type Usuario = typeof usuarios[number];

export default function UsuarioDetalhes() {
    const [showConfirm, setShowConfirm] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    const [usuario, setUsuario] = useState<Usuario | null>(null);

    useEffect(() => {
        if (id) {
            const encontrado = usuarios.find((u) => u.id === id);
            setUsuario(encontrado ?? null);
        }
    }, [id]);

    if (!usuario)
        return (
            <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
                <Sidebar />
                <main className="flex-1 p-10">
                    <Header />
                    <p className="text-lg text-[#5e5e7f]">Carregando...</p>
                </main>
            </div>
        );

    return (
        <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
            <Sidebar />
            <main className="flex-1 p-10">
                {showConfirm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
                        <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md text-center border border-[#ede9ff]">
                            <h2 className="text-xl font-semibold mb-3">
                                Tem certeza que deseja remover este usuário?
                            </h2>
                            <p className="text-[#5e5e7f] mb-6">
                                Essa ação não poderá ser desfeita.
                            </p>
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setShowConfirm(false)}
                                    className="px-4 py-2 bg-gray-200 text-[#1e1e2f] rounded-md hover:bg-gray-300 transition"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => {
                                        alert("Usuário removido!");
                                        setShowConfirm(false);
                                        router.push("/usuarios");
                                    }}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                                >
                                    Remover
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <Header />

                <h1 className="text-2xl font-bold mb-6">Detalhes do Usuário</h1>

                <div className="bg-white rounded-xl border border-[#ede9ff] p-6 shadow-md space-y-3 max-w-2xl">
                    <p><span className="font-semibold text-[#5e5e7f]">Nome:</span> {usuario.nome}</p>
                    <p><span className="font-semibold text-[#5e5e7f]">Email:</span> {usuario.email}</p>
                    <p><span className="font-semibold text-[#5e5e7f]">Telefone:</span> {usuario.telefone}</p>
                    <p><span className="font-semibold text-[#5e5e7f]">Rua:</span> {usuario.endereco.rua}, {usuario.endereco.numero}</p>
                    <p><span className="font-semibold text-[#5e5e7f]">Bairro:</span> {usuario.endereco.bairro}</p>
                    <p><span className="font-semibold text-[#5e5e7f]">CEP:</span> {usuario.endereco.cep}</p>
                    <p><span className="font-semibold text-[#5e5e7f]">UF:</span> {usuario.endereco.uf}</p>
                </div>

                <div className="flex justify-end mt-8 gap-4">
                    <button
                        onClick={() => router.push(`/usuarios/${id}/editar`)}
                        className="bg-[#ffb347] hover:bg-[#fca937] text-white font-medium px-6 py-2 rounded-md shadow-sm transition"
                    >
                        Atualizar
                    </button>
                    <button
                        onClick={() => setShowConfirm(true)}
                        className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md shadow-sm transition"
                    >
                        Apagar
                    </button>
                </div>
            </main>
        </div>
    );
}
