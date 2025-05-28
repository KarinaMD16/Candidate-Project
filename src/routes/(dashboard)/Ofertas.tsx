import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/Header'
import { useGetAplicaciones, useGetMatchingOfertas, useGetOfertas } from '../../hooks/ofertas/ofertasHooks'
import OfferCard from '../../components/OfferCard';
import { useState } from 'react';
import { useGetProfile } from '../../hooks/perfil/ProfileHook';

export const Route = createFileRoute('/(dashboard)/Ofertas')({
  component: RouteComponent,
})

function RouteComponent() {
  const [modo, setModo] = useState<'todas' | 'matching' | 'aplicaciones'>('matching');

  const { perfil } = useGetProfile()
  const { ofertas, isPending, error } = useGetOfertas();
  const { matchingOfertas, isPendingMatching, errorMatching } = useGetMatchingOfertas(perfil?.id, {
    enabled: modo && !!perfil?.id,
  });
  const { aplicaciones, isPendingAplicaciones, errorAplicaciones } = useGetAplicaciones(perfil?.id, {
    enabled: modo === 'aplicaciones' && !!perfil?.id,
  });

  const handleVerParaMi = () => {
    setModo(modo === 'matching' ? 'todas' : 'matching');
  }
  
  const handleVerAplicaciones = () => {
    setModo('aplicaciones');
  }

  let datosAMostrar = ofertas;
  if (modo === 'matching') datosAMostrar = matchingOfertas;
  if (modo === 'aplicaciones') datosAMostrar = aplicaciones;

  const isLoading =
    isPending ||
    (modo === 'matching' && isPendingMatching) ||
    (modo === 'aplicaciones' && isPendingAplicaciones);

  const hasError =
    error ||
    (modo === 'matching' && errorMatching) ||
    (modo === 'aplicaciones' && errorAplicaciones);

  return <div>
    <Header />
    <div className='opciones'>
      <button className='selected' onClick={ handleVerParaMi }>
        {modo === 'matching' ? "Ver todas" : "Ver para mi"}
      </button>
      
      <button className='selected' onClick={ handleVerAplicaciones }>
        {modo === 'aplicaciones' ? "Viendo aplicaciones" : "Ver aplicaciones"}
        
      </button>
    </div>

    {isLoading && <p>Cargando...</p>}
    
    {hasError && <p>Ocurrió un error al cargar las ofertas.</p>}
    
    {!isLoading && !hasError && modo === 'aplicaciones' && aplicaciones?.length === 0 && (
        <p>No hay aplicaciones aún.</p>
    )}

    <div className='offer-container'>
       {datosAMostrar && datosAMostrar.map(oferta => (
          <div key={oferta.id}>
            <OfferCard offer={oferta} />
          </div>
        ))}      
    </div>
  </div>
}
