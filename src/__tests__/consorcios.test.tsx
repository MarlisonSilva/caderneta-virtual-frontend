import { render, screen } from "@testing-library/react";
import Consorcios from "@/pages/consorcios";
import "@testing-library/jest-dom";

// Mocks nomeados com displayName
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

jest.mock("@/components/consorcios/HeaderConsorcios", () => {
  const MockHeaderConsorcios = () => <div data-testid="header-consorcios" />;
  MockHeaderConsorcios.displayName = "MockHeaderConsorcios";
  return MockHeaderConsorcios;
});

jest.mock("@/components/consorcios/ConsorciosTable", () => {
  const MockConsorciosTable = () => <div data-testid="consorcio-table" />;
  MockConsorciosTable.displayName = "MockConsorciosTable";
  return MockConsorciosTable;
});

describe("Página de Consórcios", () => {
  it("renderiza corretamente todos os componentes principais", () => {
    render(<Consorcios />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("header-consorcios")).toBeInTheDocument();
    expect(screen.getByTestId("consorcio-table")).toBeInTheDocument();

    // Combobox de status
    expect(screen.getByRole("combobox", { name: "" })).toBeInTheDocument();

    // Tem 2 selects, então testamos ambos
    const selects = screen.getAllByRole("combobox");
    expect(selects.length).toBe(2);

    // Campo de busca
    expect(screen.getByPlaceholderText("Buscar consórcio")).toBeInTheDocument();

    // Botão de buscar
    expect(screen.getByRole("button", { name: /buscar/i })).toBeInTheDocument();
  });
});
