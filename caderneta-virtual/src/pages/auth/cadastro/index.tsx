import { JSX, useState } from "react";
import {
  validar_Senha,
  validar_Email,
  validar_nome,
  validar_telefone,
} from "@/utils/validacoes";
import { IMaskInput } from "react-imask";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Botao_voltar from "@/components/Button_back";

export default function Login() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
    telefone: "",
  });

  const [emailError, setEmailError] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [passwordError, setPasswordError] = useState<JSX.Element | string>("");
  const [telefoneError, setTelefoneError] = useState("");

  // Função para atualizar os campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Função de submit do formulário
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden w-3/4 md:w-2/3">
        {/* Coluna do Formulário */}
        <div className="p-8">
          <Botao_voltar/>
          <h3 className="text-2xl font-semibold mb-6">Cadastre-se</h3>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* input nome */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                onBlur={() => {
                  if (!validar_nome(formData.nome)) {
                    setNomeError("Nome inválido");
                  } else {
                    setNomeError("");
                  }
                }}
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  nomeError ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]`}
              />
              {nomeError && (
                <p className="text-red-500 text-sm mt-1">{nomeError}</p>
              )}
            </div>

            {/* input email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="@"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => {
                  if (!validar_Email(formData.email)) {
                    setEmailError("Email inválido");
                  } else {
                    setEmailError("");
                  }
                }} // Valida quando o campo perde o foco
                className={`w-full p-2 border ${
                  emailError ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]`}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>
            {/* input senha */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                onBlur={() => {
                  if (!validar_Senha(formData.password)) {
                    setPasswordError(
                      <ul className="text-red-500 list-disc list-inside">
                        <li>Ter no mínimo 6 caracteres</li>
                        <li>Número [1,2,3]</li>
                        <li>Caracteres Especiais [!@#$%^&*]</li>
                        <li>Letra</li>
                      </ul>
                    );
                  } else {
                    setPasswordError("");
                  }
                }} // Valida quando o campo perde o foco
                placeholder="Senha"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]`}
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="telefone"
                className="block text-sm font-medium text-gray-600"
              >
                Telefone
              </label>

              <IMaskInput
                mask={"(00) 00000-0000"} // A máscara
                type="tel"
                id="telefone"
                onBlur={() => {
                  if (!validar_telefone(formData.telefone)) {
                    setTelefoneError("Telefone inválido");
                  } else {
                    setTelefoneError("");
                  }
                }} // Valida quando o campo perde o foco
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange} // Manipula a mudança de valor corretamente
                className={`w-full p-2 border ${
                  formData.telefone ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]`}
              />
              {formData.telefone && (
                <p className="text-red-500 text-sm mt-1">{telefoneError}</p>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {/* Número da Casa */}
              <div>
                <label
                  htmlFor="numero"
                  className="block text-sm font-medium text-gray-600"
                >
                  Nº
                </label>
                <input
                  type="text"
                  id="numero"
                  placeholder="123"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]"
                />
              </div>

              {/* Rua */}
              <div>
                <label
                  htmlFor="rua"
                  className="block text-sm font-medium text-gray-600"
                >
                  Rua
                </label>
                <input
                  type="text"
                  id="rua"
                  placeholder="Nome da Rua"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]"
                />
              </div>

              {/* CEP */}
              <div>
                <label
                  htmlFor="cep"
                  className="block text-sm font-medium text-gray-600"
                >
                  CEP
                </label>
                <IMaskInput
                  type="text"
                  mask={"00000-000"}
                  id="cep"
                  placeholder="00000-000"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]"
                />
              </div>

              {/* UF */}
              <div>
                <label
                  htmlFor="uf"
                  className="block text-sm font-medium text-gray-600"
                >
                  UF
                </label>
                <IMaskInput
                  type="text"
                  mask={"aa"}
                  id="uf"
                  placeholder="RN"
                  maxLength={2}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#816bff] uppercase"
                />
              </div>
            </div>
            {/* Botão de Entrar */}
            <Link href={"/"}>
              <button
                type="submit"
                className="w-full bg-[#816bff] text-white p-2 rounded hover:bg-[#6f5edf] transition"
              >
                Cadastrar-se
              </button>
            </Link>
          </form>
        </div>

        {/* Coluna do Ícone */}
        <div className="flex items-center justify-center bg-[#816bff] text-white">
          <UserIcon className="h-40 w-40 text-white" />
        </div>
      </div>
    </div>
  );
}
