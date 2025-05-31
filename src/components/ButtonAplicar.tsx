
import useToggleAplicaciones from "../context/ofertas/useToggleAplicaciones";
import type { Oferta } from "../models/Oferta";

type aplicarButtonProps = {
    ofertaAAplicar: Oferta;
    disable: boolean
}

const ButtonAplicar = ({ ofertaAAplicar, disable }: aplicarButtonProps) => {
    const { toggleAplicacion, aplicaciones } = useToggleAplicaciones()
    const isApplied = aplicaciones.includes(ofertaAAplicar.id);


  return (
    <button
      className={isApplied ? "btn active" : disable ? "disabled" : "btn inactive"}
      onClick={() => toggleAplicacion(ofertaAAplicar)}
      disabled={disable}
    >
      {isApplied ? "Aplicada" : "Aplicar"}
    </button>

  )
}
export default ButtonAplicar;
    // This button is used to apply for an offer