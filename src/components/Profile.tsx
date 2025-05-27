import { useGetProfile } from "../hooks/perfil/ProfileHook";
import { useGetHabilidades } from "../hooks/habilidades/HabilidadHook";
import type { Habilidad } from "../models/Habilidad";
import Header from "./Header";
import ButtonHabilidad from "./ButtonHabilidad";

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
                <ButtonHabilidad key={habilidad.id} idHabilidad={habilidad.id}> 
                  {habilidad.name}
                </ButtonHabilidad>
              ))}
              </div>
          </div>

        </div>
    </>
  )

}

export default Profile;