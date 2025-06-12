import { render, screen } from "@testing-library/react";
import CadastroConsorcio from "@/pages/consorcios/novo";
import "@testing-library/jest-dom";

// Mocks dos componentes importados com displayName
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

describe("Página de Cadastro de Consórcio", () => {
  it("renderiza a sidebar e o header", () => {
    render(<CadastroConsorcio />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renderiza os campos principais do formulário", () => {
    render(<CadastroConsorcio />);

    // Labels principais
    expect(screen.getByLabelText(/Nome do consórcio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Produto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Valor Total do Consórcio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Quantidade de Parcelas/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data de Início/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Buscar Cliente/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Clientes Adicionados/i)).toBeInTheDocument();

    // Botões
    expect(screen.getByRole("button", { name: /Adicionar/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Cadastrar Consórcio/i })).toBeInTheDocument();

    // Clientes fixos no DOM
    expect(screen.getByText("João da Silva")).toBeInTheDocument();
    expect(screen.getByText("Maria Oliveira")).toBeInTheDocument();
  });
});
