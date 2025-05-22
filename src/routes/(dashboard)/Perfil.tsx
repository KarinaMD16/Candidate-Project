import { createFileRoute, redirect,  useNavigate } from '@tanstack/react-router'
import { isAuthenticated, signOut } from '../../utils/auth'
import Profile from '../../pages/Profile'


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
  return <div>Perfil</div>
}