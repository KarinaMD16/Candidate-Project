import { useContext } from "react";
import { useCreateApplication, useDeleteAplicacion } from "../../hooks/ofertas/ofertasHooks";
import { useGetProfile } from "../../hooks/perfil/ProfileHook";
import AplicacionesContext from "./aplicacionesContext";

const useToggleAplicaciones = () => {
  const { perfil } = useGetProfile(); 
  const { aplicaciones, agregarAplicacion, quitarAplicacion } = useContext(AplicacionesContext);

  const hacerAplicacion = useCreateApplication();
  const eliminarOferta = useDeleteAplicacion();

  const toggleAplicacion = (idOferta: number) => {
  const isSelected = aplicaciones.includes(idOferta);

    if (isSelected) {
      eliminarOferta.mutate({
        candidatoId: perfil.id,
        ofertaId: idOferta,
      }, {
        onSuccess: () => quitarAplicacion(idOferta),
      });
    } else {
      hacerAplicacion.mutate({
        candidatoId: perfil.id,
        ofertaId: idOferta,
      }, {
        onSuccess: () => agregarAplicacion(idOferta),
      });
    }
  };
  

  return { toggleAplicacion, aplicaciones };
}

export default useToggleAplicaciones
