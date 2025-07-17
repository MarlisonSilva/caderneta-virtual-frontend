import { TokenContext } from "@/contexts/TokenContext";
import { useContext } from "react";

export function useToken() {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken deve ser usado dentro de TokenProvider");
  }
  return context;
}
