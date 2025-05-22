import { createFileRoute, redirect,  useNavigate } from '@tanstack/react-router'
import { isAuthenticated, signOut } from '../../utils/auth'

export const Route = createFileRoute('/(dashboard)/Perfil')({
    beforeLoad: () => {
        if (!isAuthenticated()) {
            throw redirect({
                to: '/Login',
            })
        }
    },
  component: PerfilComponent,
})

function PerfilComponent() {

  const navigate = useNavigate()
  const handlersigOut = () => {
    signOut()
     navigate({ to: '/Login' })
}

   return( 
   <div>
      Perfil
      <button type="button" onClick={handlersigOut}>Log out</button> 
   </div>
   )
}