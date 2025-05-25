import { useNavigate } from "@tanstack/react-router";
import { useHabilidades, type Habilidad } from "../services/User/HabilidadService/HabilidadHook";
import { useProfile } from "../services/User/UseProfile/ProfileHook";
import { signOut } from "../utils/auth";

 function Profile(){
 const {
    perfil,
    loading: loadingPerfil,
    error: errorPerfil,
  } = useProfile();

  const {
    habilidades,
    loading,
    error,
  } = useHabilidades();

  const navigate = useNavigate()
  const handlersigOut = () => {
    signOut()
     navigate({ to: '/Login' })
}

  if (loading || loadingPerfil) return <p>Cargando perfil...</p>;
  if (error || errorPerfil) return <p>Error al cargar perfil o habilidades</p>;


return (

    <div >
       
         <div className="Perfil">
            <h1> Mi Perfil</h1>
          <p><strong>Nombre:</strong> {perfil.nombre} {perfil.apellido}</p>
          <p><strong>Correo:</strong> {perfil.correoElectronico}</p>

         <h2>Habilidades</h2>
         <div className="habilidades-container">
          {habilidades?.map((habilidad: Habilidad) => (
            <span key={habilidad.id} className="habilidad-disponible">
              {habilidad.nombre}
            </span>
          ))}
        </div>
         </div>
         <button type="button" onClick={handlersigOut}>Cerrar Sesion</button>
    </div>
)

 }
   
export default Profile; 



