import type { Oferta } from "../models/Oferta"
import ButtonAplicar from "./ButtonAplicar"

type offerProps = {
    offer: Oferta
}

const OfferCard = ({offer}:offerProps) => {
    

  return (
    <div className="page offerCard glassmorphism" key={offer.id}>

        <div className="offer-apply">
            <h3>Oferta</h3>
            <ButtonAplicar idOferta={offer.id} />
        </div>
        
        <div className="offerCard-data">
            <h4>Empresa: {offer.empresaNombre}</h4>
            <h4>Puesto: {offer.puesto}</h4>
            <h4>Descripcion: {offer.descripcion}</h4>

            <div className="offer-abilities">
                <h4>Habilidades: </h4>
                    {offer.habilidades.map((habilidad) => (
                    <div key={habilidad.id} className={habilidad.haceMatch ? "selected" : "unselected"}>{habilidad.name}</div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default OfferCard
