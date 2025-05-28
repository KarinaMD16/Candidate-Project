
import useToggleAplicaciones from "../context/ofertas/useToggleAplicaciones";

type ofertadId = {
    idOferta: number;
}

const ButtonAplicar = ({ idOferta }: ofertadId) => {
    const { toggleAplicacion, aplicaciones } = useToggleAplicaciones()
    const isApplied = aplicaciones.includes(idOferta);

  return (
    <button className={isApplied ? "selected" : "unselected"} onClick={() => toggleAplicacion(idOferta)}>
        {isApplied ? "Aplicada" : "Aplicar"}
    </button>

  )
}
export default ButtonAplicar;
    // This button is used to apply for an offer