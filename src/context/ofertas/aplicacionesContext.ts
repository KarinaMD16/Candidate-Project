import { createContext } from "react";

type AplicacionesContextTypes = {
    aplicaciones: number[],
    agregarAplicacion: (id: number) => void;
  quitarAplicacion: (id: number) => void;
}

const AplicacionesContext = createContext<AplicacionesContextTypes>({
  aplicaciones: [],
  agregarAplicacion: () => {},
  quitarAplicacion: () => {},
});

export default AplicacionesContext;