"use client";
import Botao_voltar from "@/components/Button_back";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

export default function TelaRedefinicaoSenha() {
  const [code, setCode] = useState(Array(5).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const handleChange = (value: string, index: number) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < code.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full relative">
        <div className="absolute top-4 left-4">
          <Botao_voltar />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">
          Redefinição de senha
        </h1>
        <p className="text-center mb-6 text-gray-600">
          Insira o código recebido no email
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex justify-center gap-2">
            {code.map((value, index) => (
              <input
                key={index}
                value={value}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg"
               
              />
            ))}
          </div>
          <button
            className="w-full bg-[#816bff] text-white p-2 rounded hover:bg-[#6f5edf] transition"
            onClick={() => {
              router.push("/auth/login/esqueci_senha/nova_senha");
              console.log("ativado");
            }}
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
