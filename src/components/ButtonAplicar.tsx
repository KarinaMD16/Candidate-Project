import { useContext } from "react";
import { useCreateApplication } from "../hooks/ofertas/ofertasHooks";
import { useGetProfile } from "../hooks/perfil/ProfileHook";
import AplicacionesContext from "../context/ofertas/aplicacionesContext";

type ofertadId = {
    idOferta: number;
}

const ButtonAplicar = ({ idOferta }: ofertadId) => {
    const { aplicaciones, agregarAplicacion } = useContext(AplicacionesContext);
    const { perfil } = useGetProfile();
    const { mutate } = useCreateApplication();

    const isApplied = aplicaciones.includes(idOferta);

    const handleApply = () => {
        mutate({
            candidatoId: perfil.id,
            ofertaId: idOferta,
        },{
        onSuccess: () => agregarAplicacion(idOferta)
     });
    }

  return (
    <button className={isApplied ? "selected" : "unselected"} onClick={handleApply}>
        {isApplied ? "Aplicada" : "Aplicar"}
    </button>

  )
}
export default ButtonAplicar;
    // This button is used to apply for an offer