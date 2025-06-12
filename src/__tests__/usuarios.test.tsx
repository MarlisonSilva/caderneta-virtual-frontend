import { render, screen } from "@testing-library/react";
import Usuarios from "@/pages/usuarios/index";
import "@testing-library/jest-dom";

// Mocks com displayName para evitar warnings do ESLint
jest.mock("@/components/Siderbar", () => {
  const MockSidebar = () => <div data-testid="sidebar" />;
  MockSidebar.displayName = "MockSidebar";
  return MockSidebar;
});

jest.mock("@/components/Header", () => {
  const MockHeader = () => <div data-testid="header" />;
  MockHeader.displayName = "MockHeader";
  return MockHeader;
});

jest.mock("@/components/usuarios/HeaderUsuarios", () => {
  const MockHeaderUsuarios = () => <div data-testid="header-usuarios" />;
  MockHeaderUsuarios.displayName = "MockHeaderUsuarios";
  return MockHeaderUsuarios;
});

jest.mock("@/components/usuarios/UsuariosTable", () => {
  const MockUsuariosTable = () => <div data-testid="user-table" />;
  MockUsuariosTable.displayName = "MockUsuariosTable";
  return MockUsuariosTable;
});

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
