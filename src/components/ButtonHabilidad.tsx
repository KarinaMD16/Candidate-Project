interface HabilidadButtonProps{
    selected: boolean
    onClick: ()=> void 
    children: React.ReactNode
}

export default function HabilidadButton({ onClick, selected, children }: HabilidadButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${HabilidadButton} ${selected ?selected : ''}`}
    >
      {children}
    </button>
  )
}