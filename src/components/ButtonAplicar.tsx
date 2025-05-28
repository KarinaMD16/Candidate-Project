
import useToggleAplicaciones from "../context/ofertas/useToggleAplicaciones";

type aplicarButtonProps = {
    idOferta: number;
    idHabilidad: number,
    disable: boolean
}

const ButtonAplicar = ({ idOferta, idHabilidad, disable }: aplicarButtonProps) => {
    const { toggleAplicacion, aplicaciones } = useToggleAplicaciones()
    const isApplied = aplicaciones.includes(idOferta);

  const styleClass = isApplied ? "selected" : "unselected";
  const finalStyleClass = disable ? `${styleClass} disabled` : styleClass;

  return (
    <button  className={finalStyleClass} onClick={() => toggleAplicacion(idOferta, idHabilidad)}>
        {isApplied ? "Aplicada" : "Aplicar"}
    </button>

  )
}
export default ButtonAplicar;
    // This button is used to apply for an offer