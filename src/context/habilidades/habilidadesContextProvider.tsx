import { useEffect, useState } from "react";
import HabilidadesContext from "./habilidadesContext";
import { useGetProfile } from "../../hooks/perfil/ProfileHook";
import type { Perfil } from "../../models/Perfil";

export const HabilidadesProvider = ({ children }: { children: React.ReactNode }) => {
  const { perfil, loading } = useGetProfile();
  const [habilidades, setHabilidades] = useState<number[]>([]);

  const agregarHabilidad = (id: number) => {
    setHabilidades(prev => [...new Set([...prev, id])]);
  };

  const quitarHabilidad = (id: number) => {
    setHabilidades(prev => prev.filter(h => h !== id));
  };

  useEffect(() => {
    if (!loading && perfil?.habilidades) {
      const ids = perfil.habilidades.map((h: Perfil) => h.id);
      setHabilidades(ids);
    }
  }, [loading, perfil]);

  return (
    <HabilidadesContext.Provider value={{ habilidades, agregarHabilidad, quitarHabilidad }}>
      {children}
    </HabilidadesContext.Provider>
  );
};