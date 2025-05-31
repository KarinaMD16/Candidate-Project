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
        <div className="perfil-container ">
          <div className="perfil">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" alt="profile" width={128} />
            
            <h3>{perfil.nombre} {perfil.apellido}</h3>
            <h4>{perfil.correoElectronico}</h4>
          
            <div className="habilidades">
              <hr />

              <div className="habilidades-container">
                {Habilidades?.map((habilidad: Habilidad) => (
                  <ButtonHabilidad key={habilidad.id} idHabilidad={habilidad.id}> 
                    <img src={habilidad.icono} alt="" width={24} height={24} />
                    {habilidad.name}
                  </ButtonHabilidad>
                ))}
              </div>
            </div>
          
          </div>

        </div>
    </>
  )

}

export default Profile;