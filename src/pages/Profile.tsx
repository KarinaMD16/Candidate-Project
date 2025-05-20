//import HabilidadButton from "../components/ButtonHabilidad"
import { useGetHabilidades, useProfile } from "../services/User/UseProfile/ProfileHook"

 function Profile(){

    const{
        perfil,
        loading,
        error,
  
    }= useProfile()

const {data:habilidades}= useGetHabilidades() 



if (loading) return <p>Cargando perfil</p>

if(error){
    return <p>error al cargar perfil</p>
}

return (

    <div className="container">
       
         <div className="Perfil">
            <h1> Mi Perfil</h1>
         <p><strong>Nombre:</strong> {perfil.nombre} {perfil.apellido}</p>
      <p><strong>Correo:</strong> {perfil.correoElectronico}</p>

         <h2>Habilidades</h2>
         <div className="habilidades-container">
            {perfil.habilidades}

         </div>
         </div>

        <div className="Habilidades">
           {habilidades?.map((habilidad: {id:any, Nombre:any, ofertaHabilidad:any}) => (
          <span key={habilidad.id}>{habilidad.Nombre}</span>
        ))}
         </div>

    </div>

    
)

 }
   
export default Profile; 



