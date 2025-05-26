import { useState } from "react";
import AplicacionesContext from "./aplicacionesContext";

export const AplicacionesProvider = ({ children }: { children: React.ReactNode }) => {
  const [aplicaciones, setAplicaciones] = useState<number[]>([]);

  const agregarAplicacion = (id: number) => {
    setAplicaciones(prev => [...new Set([...prev, id])]);
  };

  const quitarAplicacion = (id: number) => {
    setAplicaciones(prev => prev.filter(ap => ap !== id));
  };

  return (
    <AplicacionesContext.Provider value={{ aplicaciones, agregarAplicacion, quitarAplicacion }}>
      {children}
    </AplicacionesContext.Provider>
  );
};