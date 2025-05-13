"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { JSX, useState } from "react";
import { validar_Senha, validar_Email } from "@/utils/validacoes";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState<JSX.Element | string>("");

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
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-3/4 md:w-2/3">
        {/* Coluna da Imagem */}
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-gray-200 p-4">
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={250}
            height={250} // Mesma largura e altura para ficar redonda
            className="w-64 h-64 object-cover rounded-full border border-gray-300 shadow-lg"
          />
        </div>

        {/* Coluna do Formulário */}
        <div className="md:w-1/2 p-8">
          <h3 className="text-2xl font-semibold mb-6">Entrar</h3>

          <form onSubmit={handleLogin} className="space-y-4">
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
                onBlur={() => {
                  if (!validar_Email(formData.email)) {
                    setEmailError("Email inválido");
                  } else {
                    setEmailError("");
                  }
                }}
                placeholder="@"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  emailError ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]`}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

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
                }}
                placeholder="Senha"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]`}
              />
              {passwordError && (
                <div className="text-red-500 text-sm mt-1">{passwordError}</div>
              )}
            </div>
            <div>
              <button
                className="block text-black text-sm font-medium hover:text-[#816bff] hover:underline"
                onClick={() =>
                  router.push("./login/esqueci_senha/redefinir_senha")
                }
              >
                Esqueci minha senha
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-[#816bff] text-white p-2 rounded hover:bg-[#6f5edf] transition"
            >
              Entrar
            </button>
          </form>

          <div className="flex justify-between mt-4">
            <span className="text-sm">Ainda não tem conta?</span>
            <button
              onClick={() => router.push("./cadastro")}
              className="text-[#816bff] hover:underline"
            >
              Cadastre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
