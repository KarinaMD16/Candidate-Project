import { useToggleHabilidad } from "../context/habilidades/useToggleHabilidades";

type ofertadId = {
  idHabilidad: number;
  children?: React.ReactNode;
}

const ButtonHabilidad = ({ idHabilidad, children }: ofertadId) => {
  const { toggleHabilidad, habilidades } = useToggleHabilidad();
  const isSelected = habilidades.includes(idHabilidad);

  return (
    <button className={isSelected ? "btn hab active" : "btn hab inactive"} onClick={() => toggleHabilidad(idHabilidad)}>
      {children}
    </button>
  )
}
export default ButtonHabilidad;
    // This button is used to toggle a skill