import { useContext } from "react";
import { useDeleteHabilidad, usePostHabilidadesCandidato } from "./HabilidadHook";
import { useGetProfile } from "../perfil/ProfileHook";
import HabilidadesContext from "../../context/habilidades/habilidadesContext";

export function useToggleHabilidad() {
  const { perfil } = useGetProfile();
  const { habilidades, agregarHabilidad, quitarHabilidad } = useContext(HabilidadesContext);
  const seleccionarHabilidad = usePostHabilidadesCandidato();
  const eliminarHabilidad = useDeleteHabilidad();

  const toggleHabilidad = (idHabilidad: number) => {
    const isSelected = habilidades.includes(idHabilidad);

    if (isSelected) {
      eliminarHabilidad.mutate({
        candidatoId: perfil.id,
        habilidadId: idHabilidad,
      }, {
        onSuccess: () => quitarHabilidad(idHabilidad),
      });
    } else {
      seleccionarHabilidad.mutate({
        idCandidato: perfil.id,
        idHabilidad: idHabilidad,
      }, {
        onSuccess: () => agregarHabilidad(idHabilidad),
      });
    }
  };


  return { toggleHabilidad, habilidades };
}
