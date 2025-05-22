import { render, screen } from "@testing-library/react";
import Vendas from "@/pages/vendas";
import "@testing-library/jest-dom";

// Mock dos componentes utilizados
jest.mock("@/components/Siderbar", () => () => <div data-testid="sidebar" />);
jest.mock("@/components/Header", () => () => <div data-testid="header" />);
jest.mock("@/components/vendas/HeaderVendas", () => () => <div data-testid="header-vendas" />);
jest.mock("@/components/vendas/SaleTable", () => () => <div data-testid="sale-table" />);

describe("Página de Vendas", () => {
  it("renderiza todos os componentes principais corretamente", () => {
    render(<Vendas />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("header-vendas")).toBeInTheDocument();
    expect(screen.getByTestId("sale-table")).toBeInTheDocument();

    // Select de filtro
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    // Input de busca
    expect(screen.getByPlaceholderText("Digite para buscar")).toBeInTheDocument();

    // Botão de buscar
    expect(screen.getByRole("button", { name: /buscar/i })).toBeInTheDocument();
  });
});
