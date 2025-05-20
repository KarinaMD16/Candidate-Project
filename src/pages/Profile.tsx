import HabilidadButton from "../components/ButtonHabilidad"
import { useProfile } from "../services/User/UseProfile/ProfileHook"

 function Profile(){

    const{
        perfil,
        loading,
        error,
        habDisponibles,
        ActHabilidadUser
    }= useProfile()

if (loading) return <p>Cargando perfil</p>
if(error) return <p>error al cargar perfil</p>
  
return (

    <div className="container">
        <h1> Mi Perfil</h1>
         <p><strong>Nombre:</strong> {perfil.nombre} {perfil.apellido}</p>
      <p><strong>Correo:</strong> {perfil.correoElectronico}</p>

         <h2>Habilidades</h2>
         <div className="habilidades-container">
            {habDisponibles.map(hab=>(
                <HabilidadButton
                key={hab}
                selected={perfil.habilidades.includes(hab)}
                onClick={()=>ActHabilidadUser(hab)}
                >
                  {hab}
                </HabilidadButton>
            ))}

         </div>

    </div>
)
 }
   
export default Profile