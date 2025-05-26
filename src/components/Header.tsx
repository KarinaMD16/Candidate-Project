import { useNavigate, useRouter } from "@tanstack/react-router"
import { signOut } from "../utils/auth"


const Header = () => {
    const navigate = useNavigate();
    const router = useRouter();

    const currentPath = router.state.location.pathname;

    const classnamePerfil =  currentPath === '/Perfil'
    const classnameOfertas = currentPath === '/Ofertas';

    const handlersigOut = () => {
        signOut()
         navigate({ to: '/Login' })
    }

  return (
    <header className="page-header glassmorphism">
          <nav>
             <button className="unselected logout" type="button" onClick={handlersigOut}>Cerrar Sesion</button>
                <button className={classnamePerfil ? "selected" : "unselected"} onClick={() => navigate({ to: '/Perfil' })}>
                  Perfil
                </button>

                <button className={classnameOfertas ? "selected" : "unselected"} onClick={() => navigate({ to: '/Ofertas' })}>
                  Ofertas
                </button>
          </nav>
    </header>
  )
}

export default Header
