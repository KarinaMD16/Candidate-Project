import { useNavigate } from "@tanstack/react-router"
import { signOut } from "../utils/auth"


const Header = () => {
    const navigate = useNavigate()
      const handlersigOut = () => {
        signOut()
         navigate({ to: '/Login' })
    }
    
  return (
    <header className="page-header glassmorphism">
          <nav>
             <button className="unselected logout" type="button" onClick={handlersigOut}>Cerrar Sesion</button>
                <button className="selected" onClick={() => navigate({ to: '/Perfil' })}>
                  Perfil
                </button>

                <button className="unselected" onClick={() => navigate({ to: '/Ofertas' })}>
                  Ofertas
                </button>
          </nav>
    </header>
  )
}

export default Header
