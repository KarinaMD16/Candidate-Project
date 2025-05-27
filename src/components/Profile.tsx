import { useNavigate } from "@tanstack/react-router";
import { useHabilidades, type Habilidad } from "../services/User/HabilidadService/HabilidadHook";
import { useProfile } from "../services/User/UseProfile/ProfileHook";
import { signOut } from "../utils/auth";
import { useState } from "react";
import HabilidadButton from "./ButtonHabilidad";

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

  //probando 
   const [habSleccionada, sethabSeleccionada] = useState<number[]>([]);

  const Habilidad = (id: number) => {
    const habilidad = habilidades.find((hab) => hab.id === id);
    if (!habilidad) return;

    sethabSeleccionada((prev) =>
      prev.includes(id) ? prev.filter((hab) => hab !== id) : [...prev, id]
    );
  };  //es para deseleccionar o no busca las habilidades con el mismo id y las guarda y si se toca otra vez la quita 

  const navigate = useNavigate()
  const handlersigOut = () => {
    signOut()
     navigate({ to: '/Login' })
}

const habilidadEle=habilidades?.filter((habilidad)=>
habSleccionada.includes(habilidad.id)
); //hab selec y luego se muestran

  if (loading || loadingPerfil) return <p>Cargando perfil...</p>;
  if (error || errorPerfil) return <p>Error al cargar perfil o habilidades</p>;


return (

    <div className="container">
       
         <div className="Perfil">
            <h1> Mi Perfil</h1>
         <h3>Nombre:{perfil?.nombre} {perfil?.apellido}</h3>
      <h3>Correo: {perfil?.correoElectronico}</h3>
              <h3> habilidades del Cndidato </h3>{/*recorre lista de habilidades del perfil  y muestra  */}
                    <div>
               {habilidadEle && habilidadEle.length > 0   //si hya habilidades seleccionadas 
             ? habilidadEle.map(hab => (
                <span key={hab.id}>{hab.nombre}</span>
              ))
            : perfil?.habilidades?.map(hab => (
                <span key={hab.id}>{hab.Nombre}</span>
              )) //habilidades selleciondas o las que estan en el perfil
          }

                    </div>

         <h2>Habilidades</h2>
         <div className="habilidades-container">
          {habilidades?.map((habilidad: Habilidad) => (
            <HabilidadButton
             key={habilidad.id}
             id={habilidad.id}
             selected={habSleccionada.includes(habilidad.id)}
             onToggle={Habilidad}>
             {habilidad.nombre}
            </HabilidadButton> 
            //boton muestra las habilidades y si se puedenseleccionar o lo otro
          ))}
        </div>
               {/* <h2>Habilidades Elejidas</h2>
                <div className="habilidades seleccionadas">
                  {habilidadEle && habilidadEle.length>0 &&( //muestra si tiene algo 
                   habilidadEle.map((habilidad)=>(
                   <span key={habilidad.id}
                   className="habilidades selecciondas">
                    {habilidad.nombre}
                   </span>
                   ))
                  )}
                </div>
                 {/*mostrar cuales se han elegido */}
         </div>
         <button type="button" onClick={handlersigOut}>Cerrar Sesion</button>
    </div>
)
 }
   
export default Profile; 



