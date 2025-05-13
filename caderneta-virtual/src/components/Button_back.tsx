import { useRouter } from "next/navigation";

export default function Botao_voltar() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-gray-500 text-sm mb-4  hover:text-gray-700"
    >
      &lt; Voltar
    </button>
  );
}
