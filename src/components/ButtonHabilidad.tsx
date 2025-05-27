import { useToggleHabilidad } from "../context/habilidades/useToggleHabilidades";

type buttonHabilidadProps = {
  idHabilidad: number;
  children?: React.ReactNode;
}

const ButtonHabilidad = ({ idHabilidad, children }: buttonHabilidadProps) => {
  const { toggleHabilidad, habilidades } = useToggleHabilidad();
  const isSelected = habilidades.includes(idHabilidad);


  return (
    <button className={isSelected ? "selected" : "unselected"} onClick={() => toggleHabilidad(idHabilidad)}>
      {children}
    </button>
  )
}

export default ButtonHabilidad;
    // This button is used to toggle a skill