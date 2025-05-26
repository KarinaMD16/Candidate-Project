import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/Header'
import { useGetMatchingOfertas, useGetOfertas } from '../../hooks/ofertas/ofertasHooks'
import OfferCard from '../../components/OfferCard';
import { useState } from 'react';
import { useGetProfile } from '../../hooks/perfil/ProfileHook';

export const Route = createFileRoute('/(dashboard)/Ofertas')({
  component: RouteComponent,
})

function RouteComponent() {

  const [mostrar, setMostrar] = useState(false);
  const {perfil} = useGetProfile()

  const { ofertas, isPending, error } = useGetOfertas();
  const { matchingOfertas,  isPendingMatching, errorMatching } = useGetMatchingOfertas(perfil?.id, mostrar);
  console.log(perfil.id)
  const datosAMostrar = mostrar ? matchingOfertas : ofertas;

  const handleVerParaMi = () =>{
    setMostrar(prev => !prev);
  }

  if (isPending) return <div>caragando</div>
  if (error) return <div>error</div>

  return <div>
    <Header />
    <div className='opciones'>
      <button className='selected' onClick={handleVerParaMi}>{mostrar ? "Ver todas" : "Ver para mi"}</button>
    </div>

    <div className='offer-container'>

       {datosAMostrar && datosAMostrar.map(oferta => (
          <div key={oferta.id}>
            <OfferCard offer={oferta} />
          </div>
        ))}
      
    </div>
  </div>
}
