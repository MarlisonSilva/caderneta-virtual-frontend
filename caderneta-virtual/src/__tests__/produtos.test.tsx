import { render, screen } from "@testing-library/react";
import Produtos from "@/pages/produtos";
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

jest.mock("@/components/produtos/HeaderProdutos", () => {
  const MockHeaderProdutos = () => <div data-testid="header-produtos" />;
  MockHeaderProdutos.displayName = "MockHeaderProdutos";
  return MockHeaderProdutos;
});

jest.mock("@/components/produtos/ProductTable", () => {
  const MockProductTable = () => <div data-testid="product-table" />;
  MockProductTable.displayName = "MockProductTable";
  return MockProductTable;
});

describe("Página de Produtos", () => {
  it("renderiza corretamente todos os componentes principais", () => {
    render(<Produtos />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("header-produtos")).toBeInTheDocument();
    expect(screen.getByTestId("product-table")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Digite para buscar")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /buscar/i })).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});
