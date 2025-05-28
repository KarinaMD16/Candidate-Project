import { useContext } from "react";
import { useCreateApplication, useDeleteAplicacion } from "../../hooks/ofertas/ofertasHooks";
import { useGetProfile } from "../../hooks/perfil/ProfileHook";
import AplicacionesContext from "./aplicacionesContext";
import type { Oferta } from "../../models/Oferta";


const useToggleAplicaciones = () => {
  const { perfil } = useGetProfile(); 
  const { aplicaciones, agregarAplicacion, quitarAplicacion } = useContext(AplicacionesContext);
  
  const hacerAplicacion = useCreateApplication();
  const eliminarOferta = useDeleteAplicacion();

  const toggleAplicacion = (oferta: Oferta) => {
  const isSelected = aplicaciones.includes(oferta.id);

    if (isSelected ) {
      eliminarOferta.mutate({
        candidatoId: perfil.id,
        ofertaId: oferta.id,
      }, {
        onSuccess: () => quitarAplicacion(oferta.id),
      });
    } else {
      hacerAplicacion.mutate(
      { candidatoId: perfil.id, ofertaId: oferta.id },
      { onSuccess: () => agregarAplicacion(oferta.id) });
    }
  };
  

  return { toggleAplicacion, aplicaciones };
}

export default useToggleAplicaciones
