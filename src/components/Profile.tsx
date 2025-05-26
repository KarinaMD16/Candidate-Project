import { useGetProfile } from "../hooks/perfil/ProfileHook";
import { useGetHabilidades, usePostHabilidadesCandidato } from "../hooks/habilidades/HabilidadHook";
import type { Habilidad } from "../models/Habilidad";
import Header from "./Header";

 function Profile(){
 const {
    perfil,
    loading: loadingPerfil,
    error: errorPerfil,
  } = useGetProfile();

   const {
    Habilidades,
    loadingHabilidades,
    errorHabilidades,
  } = useGetHabilidades();

  
const habilidadesCandidato = usePostHabilidadesCandidato();

  const handleToggle = (habilidad: Habilidad) => {
   habilidadesCandidato.mutate({
      idCandidato: perfil.id,
      idHabilidad: habilidad.id,
    });
  }

  if (loadingHabilidades || loadingPerfil) return <p>Cargando perfil...</p>;
  if (errorPerfil || errorHabilidades) return <p>Error al cargar perfil o habilidades</p>;


return (
    <>
        <Header />

        <div className="perfil-container">
          <div className="perfil">
            <h1> Mi Perfil</h1>
            <p><strong>Nombre: </strong> {perfil.nombre} {perfil.apellido}</p>
            <p><strong>Correo: </strong> {perfil.correoElectronico}</p>
          </div>

          <div className="habilidades">
            <h2>Mis Habilidades</h2>

            <div className="habilidades-container">
              {Habilidades?.map((habilidad: Habilidad) => (
                <button onClick={() => {handleToggle(habilidad)}} key={habilidad.id} className="unselected-hab">
                  {habilidad.name}
                </button>
                ))}
              </div>
          </div>

        </div>
    </>
  )

}

export default Profile;