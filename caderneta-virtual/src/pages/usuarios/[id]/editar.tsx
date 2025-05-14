// src/pages/usuarios/[id]/editar.tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Siderbar";
import Header from "@/components/Header";
import { usuarios } from "@/data/usuarios";

export default function EditarUsuario() {
    const router = useRouter();
    const { id } = router.query;

    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        endereco: {
            uf: "",
            cep: "",
            rua: "",
            numero: "",
            bairro: "",
        },
    });

    useEffect(() => {
        if (id) {
            const usuario = usuarios.find((u) => u.id === id);
            if (usuario) setForm(usuario);
        }
    }, [id]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        if (name in form.endereco) {
            setForm({ ...form, endereco: { ...form.endereco, [name]: value } });
        } else {
            setForm({ ...form, [name]: value });
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Usuário atualizado:", form);
        alert("Usuário atualizado com sucesso!");
        router.push("/usuarios");
    }

    return (
        <div className="flex min-h-screen bg-[#f7f6fc] text-[#1e1e2f]">
            <Sidebar />

            <main className="flex-1 p-10">
                <Header />
                <h1 className="text-2xl font-bold mb-6">Editar Usuário</h1>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-6 max-w-2xl bg-white border border-[#ede9ff] rounded-xl shadow-md p-8"
                >
                    <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" className="border border-[#d1cafe] rounded-md p-3 w-full" />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border border-[#d1cafe] rounded-md p-3 w-full" />
                    <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="Telefone" className="border border-[#d1cafe] rounded-md p-3 w-full" />
                    <input name="senha" value={form.senha} onChange={handleChange} placeholder="Senha" className="border border-[#d1cafe] rounded-md p-3 w-full" />

                    <div className="grid grid-cols-4 gap-4">
                        <input name="uf" value={form.endereco.uf} onChange={handleChange} placeholder="UF" className="col-span-1 border border-[#d1cafe] rounded-md p-3" />
                        <input name="cep" value={form.endereco.cep} onChange={handleChange} placeholder="CEP" className="col-span-1 border border-[#d1cafe] rounded-md p-3" />
                        <input name="rua" value={form.endereco.rua} onChange={handleChange} placeholder="Rua" className="col-span-2 border border-[#d1cafe] rounded-md p-3" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input name="numero" value={form.endereco.numero} onChange={handleChange} placeholder="Nº" className="border border-[#d1cafe] rounded-md p-3" />
                        <input name="bairro" value={form.endereco.bairro} onChange={handleChange} placeholder="Bairro" className="border border-[#d1cafe] rounded-md p-3" />
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="bg-gray-300 hover:bg-gray-400 text-[#1e1e2f] px-6 py-3 rounded-md shadow-sm"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-[#27ae60] hover:bg-[#219653] text-white font-medium px-6 py-3 rounded-md shadow-sm"
                        >
                            Confirmar
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
