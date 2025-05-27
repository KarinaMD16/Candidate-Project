import { createContext } from "react";

type AplicacionesContextTypes = {
    aplicaciones: number[],
    agregarAplicacion: (id: number) => void;
    quitarAplicacion: (id: number) => void;
    aplicacionesInicio?: number[];
}

const AplicacionesContext = createContext<AplicacionesContextTypes>({
  aplicaciones: [],
  agregarAplicacion: () => {},
  quitarAplicacion: () => {},
  aplicacionesInicio: [],
});

export default AplicacionesContext;