import { useContext } from "react"
import type { Oferta } from "../models/Oferta"
import ButtonAplicar from "./ButtonAplicar"
import HabilidadesContext from "../context/habilidades/habilidadesContext"

type offerProps = {
    offer: Oferta
}

const OfferCard = ({ offer }: offerProps) => {
  const { habilidades } = useContext(HabilidadesContext)
  const tieneHabilidad = offer.habilidades.some(h => habilidades.includes(h.id));

  
  return (
    <div className="page offerCard glassmorphism" key={offer.id}>
      <div className="offer-apply">
        <h3>Oferta</h3>
        <ButtonAplicar disable={!tieneHabilidad} ofertaAAplicar={offer} />
        
      </div>

      <div className="offerCard-data">
        <h4>Empresa: {offer.empresaNombre}</h4>
        <h4>Puesto: {offer.puesto}</h4>
        <h4>Descripcion: {offer.descripcion}</h4>

        <div className="offer-abilities">
          <h4>Habilidades: </h4>
          
          {offer.habilidades.map((habilidad) => {
            const isSelected = habilidades.includes(habilidad.id);

            return (
              <div
                key={habilidad.id}
                className={`${isSelected ? "selected" : "unselected"}`}
              >
                {habilidad.name}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OfferCard
