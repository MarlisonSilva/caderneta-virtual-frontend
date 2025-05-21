import { render, screen } from "@testing-library/react";
import Produtos from "@/pages/produtos";
import "@testing-library/jest-dom";

jest.mock("@/components/Siderbar", () => () => <div data-testid="sidebar" />);
jest.mock("@/components/Header", () => () => <div data-testid="header" />);
jest.mock("@/components/produtos/HeaderProdutos", () => () => <div data-testid="header-produtos" />);
jest.mock("@/components/produtos/ProductTable", () => () => <div data-testid="product-table" />);

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
