import { useRouter } from 'next/router';
import { render, screen, waitFor } from "@testing-library/react";
import EditConsortium from "@/pages/consorcios/[id]/editar";
import * as connectionModule from "@/utils/connections";

import "@testing-library/jest-dom";

jest.mock("@/utils/connections");

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

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

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
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    });

    (connectionModule.fetchAPI as jest.Mock).mockImplementation(({ path }) => {
      if (path === "/categories/") {
        return Promise.resolve([{ id: 1, name: "Categoria Teste" }]);
      } else if (path === "/colors/") {
        return Promise.resolve([{ id: 1, name: "Azul" }]);
      } else if (path === "/metrics/") {
        return Promise.resolve([{ id: 1, name: "kg" }]);
      }
      return Promise.resolve([]);
    });
  });

  it("renderiza a sidebar e o header", async () => {
    render(<EditConsortium />);

    expect(await screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(await screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renderiza os campos principais do formulário", async () => {
    render(<EditConsortium />);

    // Labels principais
    await waitFor(() => {

      expect(screen.getByLabelText(/Nome do consórcio/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Produto/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Valor Total/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Parcelas/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Data de Início/i)).toBeInTheDocument();

      // Botões
      expect(screen.getByRole("button", { name: /Salvar/i })).toBeInTheDocument();

      
    });
  });
});
