import { render, screen } from "@testing-library/react";
import Usuarios from "@/pages/usuarios/index";
import "@testing-library/jest-dom";

// Mock dos componentes usados na página
jest.mock("@/components/Siderbar", () => () => <div data-testid="sidebar" />);
jest.mock("@/components/Header", () => () => <div data-testid="header" />);
jest.mock("@/components/usuarios/HeaderUsuarios", () => () => <div data-testid="header-usuarios" />);
jest.mock("@/components/usuarios/UsuariosTable", () => () => <div data-testid="user-table" />);

describe("Página de Usuários", () => {
  it("renderiza todos os componentes principais corretamente", () => {
    render(<Usuarios />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("header-usuarios")).toBeInTheDocument();
    expect(screen.getByTestId("user-table")).toBeInTheDocument();

    // Verifica se existe o select de filtro
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    // Verifica o input de busca
    expect(screen.getByPlaceholderText("Digite para buscar")).toBeInTheDocument();

    // Verifica o botão "Buscar"
    expect(screen.getByRole("button", { name: /buscar/i })).toBeInTheDocument();
  });
});
