import { createContext } from "react";

type HabilidadesContextTypes = {
    habilidades: number[],
    agregarHabilidad: (id: number) => void;
    quitarHabilidad: (id: number) => void;
}

const HabilidadesContext = createContext<HabilidadesContextTypes>({
  habilidades: [],
  agregarHabilidad: () => {},
  quitarHabilidad: () => {},
});

export default HabilidadesContext;