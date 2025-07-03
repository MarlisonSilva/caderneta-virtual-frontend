import { render, screen } from "@testing-library/react";
import Vendas from "@/pages/vendas";
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

jest.mock("@/components/sales/HeaderSales", () => {
  const MockHeaderVendas = () => <div data-testid="header-vendas" />;
  MockHeaderVendas.displayName = "MockHeaderVendas";
  return MockHeaderVendas;
});

jest.mock("@/components/sales/SalesTable", () => {
  const MockSaleTable = () => <div data-testid="sale-table" />;
  MockSaleTable.displayName = "MockSaleTable";
  return MockSaleTable;
});

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
