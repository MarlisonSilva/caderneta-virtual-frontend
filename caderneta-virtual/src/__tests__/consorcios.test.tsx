import { render, screen } from "@testing-library/react";
import Consorcios from "@/pages/consorcios";
import "@testing-library/jest-dom";

jest.mock("@/components/Siderbar", () => () => <div data-testid="sidebar" />);
jest.mock("@/components/Header", () => () => <div data-testid="header" />);
jest.mock("@/components/consorcios/HeaderConsorcios", () => () => <div data-testid="header-consorcios" />);
jest.mock("@/components/consorcios/ConsorciosTable", () => () => <div data-testid="consorcio-table" />);

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
