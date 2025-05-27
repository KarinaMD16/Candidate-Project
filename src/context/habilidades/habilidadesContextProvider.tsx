import { useState } from "react";
import HabilidadesContext from "./habilidadesContext";

export const HabilidadesProvider = ({ children }: { children: React.ReactNode }) => {
  const [habilidades, setHabilidades] = useState<number[]>([]);

  const agregarHabilidad = (id: number) => {
    setHabilidades(prev => [...new Set([...prev, id])]);
  };

  const quitarHabilidad = (id: number) => {
    setHabilidades(prev => prev.filter(h => h !== id));
  };

  return (
    <HabilidadesContext.Provider value={{ habilidades, agregarHabilidad, quitarHabilidad }}>
      {children}
    </HabilidadesContext.Provider>
  );
};