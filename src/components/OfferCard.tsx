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
    <div className="page offerCard " key={offer.id}>

      <div className="offerCard-data">
        <div className="offerCard-heading">
          <img src={offer.icono} alt="" width={30} height={30} className="icon company"/>
          <div>
            <h2>{offer.puesto}</h2>
            <p>{offer.empresaNombre}</p>
          </div>
          <div className="offer-apply">
            <ButtonAplicar disable={!tieneHabilidad} ofertaAAplicar={offer} />
        </div>
        </div>
        
        <h4 className="offerCard-desc">{offer.descripcion}</h4>
        <hr />
        <div className="offer-abilities">
          <h4>Requerimientos: </h4>
          {offer.habilidades.map((habilidad) => {
            const isSelected = habilidades.includes(habilidad.id);
            return (
              <div
                key={habilidad.id}
                className={`${isSelected ? "req active" : "req inactive"}`}
              >
                <img src={habilidad.icono} alt="" className="icon"/>
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
