import { createContext, useContext } from "react";

const ChaosContext = createContext({ level: 0, interactive: true });

export function ChaosProvider({ level, interactive = true, children }) {
  return (
    <ChaosContext.Provider value={{ level, interactive }}>
      {children}
    </ChaosContext.Provider>
  );
}

export function useChaos() {
  return useContext(ChaosContext);
}
