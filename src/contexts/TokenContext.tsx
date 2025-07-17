import Login from "@/pages/auth/login";
import { createContext, useState, useEffect, ReactNode } from "react";

export type Token = {
  token: string;
  user_name: string;
};

type TokenContextType = {
  token: Token | null;
  setToken: (token: Token | null) => void;
};

export const TokenContext = createContext<TokenContextType | undefined>(
  undefined,
);

export function TokenProvider({ children }: { children: ReactNode }) {
  const [token, setTokenState] = useState<Token | null>(null);

  const setToken = (newToken: Token | null) => {
    setTokenState(newToken);
    if (newToken) {
      localStorage.setItem("authToken", JSON.stringify(newToken));
    } else {
      localStorage.removeItem("authToken");
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("authToken");
    if (stored) {
      try {
        const parsed: Token = JSON.parse(stored);
        setTokenState(parsed);
      } catch (e) {
        console.error("Token inválido no localStorage");
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {token ? children : <Login />}
    </TokenContext.Provider>
  );
}
