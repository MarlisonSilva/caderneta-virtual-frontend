"use client";

import Botao_voltar from "@/components/Button_back";
import { validar_Senha } from "@/utils/validacoes";
import { useRouter } from "next/router";
import { JSX, useState } from "react";

export default function Nova_senha() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });

  const [passwordError, setPasswordError] = useState<JSX.Element | string>("");
  const [confirmError, setConfirmError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validarFormulario = (): boolean => {
    const isPasswordValid = validar_Senha(formData.password);
    const isSame = formData.password === formData.confirm_password;

    let isValid = true;

    if (!isPasswordValid) {
      setPasswordError(
        <ul className="text-red-500 list-disc list-inside">
          <li>Ter no mínimo 6 caracteres</li>
          <li>Número [1,2,3]</li>
          <li>Caracteres Especiais [!@#$%^&*]</li>
          <li>Letra</li>
        </ul>
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!isSame) {
      setConfirmError("As senhas não coincidem.");
      isValid = false;
    } else {
      setConfirmError("");
    }

    return isValid;
  };

  const enviarNovaSenha = () => {
    if (validarFormulario()) {
      // Aqui pode chamar uma API se necessário antes do redirecionamento
      router.push("/auth/login");
      console.log("Senha válida e confirmada:", formData.password);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-gray-300">
        <Botao_voltar />
        <h1 className="text-2xl font-bold text-center text-[#816bff] mb-2">Nova Senha</h1>
        <p className="text-sm text-center text-gray-500 mb-6">Coloque a sua nova senha</p>

        <form>
          {/* Senha */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Nova senha"
              value={formData.password}
              onChange={handleChange}
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
              className={`w-full p-2 border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]`}
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          {/* Confirmar senha */}
          <div className="mb-4">
            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-600">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirm_password"
              placeholder="Confirme a senha"
              value={formData.confirm_password}
              onChange={handleChange}
              onBlur={() => {
                if (formData.password !== formData.confirm_password) {
                  setConfirmError("As senhas não coincidem.");
                } else {
                  setConfirmError("");
                }
              }}
              className={`w-full p-2 border ${
                confirmError ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-[#816bff]`}
            />
            {confirmError && <p className="text-red-500 text-sm mt-1">{confirmError}</p>}
          </div>

          <button
            type="button"
            onClick={enviarNovaSenha}
            className="w-full bg-[#816bff] text-white p-2 rounded hover:bg-[#6f5edf] transition"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
