import { useState, type JSX } from "react";
import AplicacionesContext from "./aplicacionesContext";

type AplicacionesContextTypes = {
children: JSX.Element;
};

export const AplicacionesProvider = ({ children }: AplicacionesContextTypes ) => {
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