import { useEffect, useState } from "react";
import AplicacionesContext from "./aplicacionesContext";
import { useGetProfile } from "../../hooks/perfil/ProfileHook";
import { useGetAplicaciones } from "../../hooks/ofertas/ofertasHooks";

export const AplicacionesProvider = ({ children }: { children: React.ReactNode }) => {
  const [aplicaciones, setAplicaciones] = useState<number[]>([]);
  const { perfil } = useGetProfile();
  const { aplicaciones: aplicacionesCargadas } = useGetAplicaciones(perfil?.id, {
    enabled: !!perfil?.id,
  });

  const agregarAplicacion = (id: number) => {
    setAplicaciones(prev => [...new Set([...prev, id])]);
  };

  const quitarAplicacion = (id: number) => {
    setAplicaciones(prev => prev.filter(ap => ap !== id));
  };

  useEffect(() => {
    if (aplicacionesCargadas) {
      const ids = aplicacionesCargadas.map((oferta: { id: number }) => oferta.id);
      setAplicaciones(ids);
    }
  }, [aplicacionesCargadas]);

  return (
    <AplicacionesContext.Provider value={{ aplicaciones, agregarAplicacion, quitarAplicacion }}>
      {children}
    </AplicacionesContext.Provider>
  );
};