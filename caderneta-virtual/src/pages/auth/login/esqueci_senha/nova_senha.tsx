"use client";
export default function Nova_senha() {
  return (
    <div>
      <h1>Nova Senha</h1>
      <form>
        <input type="password" placeholder="Digite sua nova senha" />
        <input type="password" placeholder="Confirme sua nova senha" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
