import { createContext, useState, ReactNode } from "react";

export type Token = {
  token: string;
};

type TokenContextType = {
  token: Token | null;
  setToken: (token: Token | null) => void;
};

export const TokenContext = createContext<TokenContextType | undefined>(undefined);

export function TokenProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<Token | null>(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}
