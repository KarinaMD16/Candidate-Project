interface HabilidadButtonProps {
  id: number;
  selected: boolean;
  onToggle:(id:number)=> void;
  //onClick: () => void;
  children: React.ReactNode;
}

export default function HabilidadButton({ id, selected,onToggle, children }: HabilidadButtonProps) {
     //prueba
  return (
    <button
      onClick={()=>onToggle(id)}
      className={selected ? 'selected' : 'habilidad-disponible'}
    >
      {children}
    </button>
  );
}
